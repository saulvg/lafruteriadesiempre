const getDB = require('./getDB.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const {format} = require('date-fns');
function formatDate (date) {
    return(format(date, 'yyyy-MM-dd HH:mm:ss'))
};

async function initDB(){
    let connection;

    try {
        connection = await getDB();
        await connection.query('DROP TABLE IF EXISTS user');
        console.log('user table drop');
        await connection.query('DROP TABLE IF EXISTS products');
        console.log('products table drop');

        await connection.query(`
            CREATE TABLE user (
                id INT PRIMARY KEY AUTO_INCREMENT,
                email VARCHAR(100) UNIQUE NOT NULL,
                password VARCHAR (100) NOT NULL,
                role VARCHAR(20) DEFAULT "admin",
                recoverCode VARCHAR(100),
                createdAt DATETIME NOT NULL,
                modifiedAt DATETIME
            );
        `);
        console.log('The user table has been created =)');

        await connection.query(`
            CREATE TABLE products (
                id INT PRIMARY KEY AUTO_INCREMENT,
                name VARCHAR(100) NOT NULL,
                photo VARCHAR(150) NOT NULL,
                pricekg DECIMAL (5, 2) NOT NULL,
                description VARCHAR(255) NOT NULL,
                showw BOOLEAN DEFAULT true,
                createdAt DATETIME NOT NULL,
                modifiedAt DATETIME
            );
        `);
        console.log('The product table has been created  =)');

        const {ADMIN_PASS} = process.env;
        const adminPass = await bcrypt.hash(ADMIN_PASS, saltRounds);
        const {ADMIN_MAIL} = process.env;

        await connection.query(`
            INSERT INTO user (id, email, password, createdAt) VALUES (
                ${Math.floor(Math.random() * 100 +1)},
                "${ADMIN_MAIL}",
                "${adminPass}",
                "${formatDate(new Date())}"
            );
        `)

    } catch (error) {
        console.error(error);
    }finally{
        if(connection) connection.release();
        process.exit();
    }
};

initDB();