const getDB = require("../../database/getDB");

const deleteProduct = async (req, res, next) =>{
    let connection;

    try {
        connection = await getDB();
        
        const {idProduct} = req.params;
        
        if(!idProduct){
            const error = new Error('Faltan campos');
            error.httpStatus = 400;
            throw error;
        };

        await connection.query(
            `DELETE FROM products WHERE id = ?`,
            [idProduct]
        );
        
        res.send({
            message:'Producto borrado correctamente'
        })
    } catch (error) {
        next(error);
    }finally{
        if(connection) connection.release();
    }
};

module.exports = deleteProduct;