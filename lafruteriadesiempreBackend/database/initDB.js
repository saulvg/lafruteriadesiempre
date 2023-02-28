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
        await connection.query('DROP TABLE IF EXISTS products');


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
                pricekg DECIMAL (5, 2) NOT NULL,
                description VARCHAR(255) NOT NULL,
                createdAt DATETIME NOT NULL,
                modifiedAt DATETIME
            );
        `);
        console.log('The product table has been created  =)');

        const {ADMIN_PASS} = process.env;
        const adminPass = await bcrypt.hash(ADMIN_PASS, saltRounds);
        const {ADMIN_MAIL} = process.env;

        await connection.query(`
            INSERT INTO user (email, password, createdAt) VALUES (
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