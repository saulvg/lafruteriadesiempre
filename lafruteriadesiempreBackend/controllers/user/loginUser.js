const getDB = require('../../database/getDB');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res, next) => {
    
    let connection;

    try {
        connection = await getDB();

        const {email, password} = req.body;
        
        if(!(email || password)){
            const error = new Error('Faltan campos');
            error.httpStatus = 400;
            throw error;
        };

        const [user] = await connection.query(`
            SELECT id, role, password FROM user WHERE email = ?`,
            [email]
        );
        
        let validPassword;
        if(user.length > 0){
            validPassword = await bcrypt.compare(password, user[0].password);
        };
        if(user.length < 1 || !validPassword){
            const error = new Error('El email o contraseña son incorrectos');
            error.httpStatus = 401;
            throw error;
        };

        const tokenInfo = {
            id: user[0].id,
            role: user[0].role,
        };
        const token = jwt.sign(tokenInfo, process.env.SECRET,{
            expiresIn: '1d'
        });

        res.send({
            data:{
                token
            }
        })

    } catch (error) {
        next(error);
    }finally{
        if(connection) connection.release();
    }
}

module.exports = loginUser;