const getDB = require('../database/getDB');
const jwt = require('jsonwebtoken');

const isAuth = async (req, res, next) => {
    let connection;

    try {

        connection = await getDB();

        const {authorization} = req.headers;
        if(!authorization){
            const error = new Error('Missing authentication header');
            error.httpStatus = 401;
            throw(error);
        }
        let tokenInfo;

        try {
            tokenInfo = jwt.verify(authorization, process.env.SECRET);
        } catch (_) {
            const error = new Error('Token is not valid');
            error.httpStatus = 401;
            throw(error);
        }

        const [user] = await connection.query(
            `SELECT email FROM user WHERE id = ?`,
            [tokenInfo.id]
        );
        if(user[0]?.email !== process.env.ADMIN_MAIL){
            const error = new Error('Token is not valid');
            error.httpStatus = 401;
            throw(error);
        }

        req.userAuth = tokenInfo;
        next();

    } catch (error) {
        next(error)
    }finally{
        if(connection) connection.release();
    }
}


module.exports = isAuth;