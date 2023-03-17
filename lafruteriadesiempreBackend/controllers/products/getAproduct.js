const getDB = require('../../database/getDB');

const getAproduct = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const {idProduct} = req.params;

        const [product] = await connection.query(`
            SELECT name, photo, pricekg, description, showw FROM products WHERE id = ?`,
            [idProduct]
            );
        
        if(product.length < 1){
            const error = new Error('Error al cargar el producto');
            error.httpStatus = 400;
            throw error;
        }
        
        res.send({
            data:product
        }); 

    } catch (error) {
        next(error);
    }finally{
        if (connection) connection.release();
    }
};

module.exports = getAproduct;