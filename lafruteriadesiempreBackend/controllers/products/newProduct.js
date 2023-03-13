const getDB = require('../../database/getDB');
const {savePhoto} = require('../../helpers');

const newProdut = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const {name, pricekg, description} = req.body;

        if(!(name || pricekg || description)){
            const error = new Error('Faltan campos');
            error.httpStatus = 400;
            throw error;
        }

        const photo = req.files?.photo;
        let productPhoto;
        if(!photo) {
            const error = new Error('Faltan campos');
            error.httpStatus = 400;
            throw error;
        }else{
            productPhoto = await savePhoto(photo);
        }

        const [products] = await connection.query(
            `INSERT INTO products
                (name, photo, pricekg, description, createdAt)
            VALUES
                (?, ?, ?, ?, ?)`,
            [name, productPhoto, pricekg, description, new Date()]
        );

        res.send({
            message:"Producto añadido con exito"
        });

    } catch (error) {
        next(error);
    }finally{
        if (connection) connection.release();
    }
}

module.exports = newProdut;