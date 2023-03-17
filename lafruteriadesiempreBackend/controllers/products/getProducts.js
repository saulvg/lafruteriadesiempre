const getDB = require('../../database/getDB');

const getProducts = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const [products] = await connection.query(`
            SELECT id, name, photo, pricekg, description, showw FROM products
        `);
        
        if(products.length < 1){
            const error = new Error('Todavia no hay productos disponibles');
            error.httpStatus = 400;
            throw error;
        }
        
        res.send({
            data:products
        }); 

    } catch (error) {
        next(error);
    }finally{
        if (connection) connection.release();
    }
};

module.exports = getProducts;