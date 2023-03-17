const getDB = require("../../database/getDB");

const editProduct = async (req, res, next) => {
    
    let connection;
    try {
        connection = await getDB();

        const {idProduct} = req.params;

        const {
            name,
            pricekg,
            description,
            showw
        } = req.body;

        if(name) {
            await connection.query(
                `UPDATE products SET name = ? WHERE id = ?`,
                [name, idProduct]
            );
        }
        if(pricekg) {
            await connection.query(
                `UPDATE products SET pricekg = ? WHERE id = ?`,
                [pricekg, idProduct]
            );
        }
        if(description) {
            await connection.query(
                `UPDATE products SET description = ? WHERE id = ?`,
                [description, idProduct]
            );
        }
        if(showw) {
            await connection.query(
                `UPDATE products SET showw = ? WHERE id = ?`,
                [showw, idProduct]
            );
        }

        if(name||pricekg||description||showw) {
            await connection.query(
                `UPDATE products SET modifiedAt = ? WHERE id = ?`,
                [new Date(), idProduct]
            );
        }
        

        res.send({
            message: 'Producto actualizado con exito'
        })
        
        
    } catch (error) {
        next(error)
    }finally{
        if(connection) connection.release();
    }
}

module.exports = editProduct;