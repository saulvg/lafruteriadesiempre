require("dotenv").config();
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const app = express();

const {PORT} = process.env;

app.use(morgan("dev"));
app.use(cors());

app.use(express.json());

// Middleware que deserializa un body en formato "form-data" y lo pone disponible
// en la propiedad "request.body". Si hay algún archivo estará disponible en la
// propiedad "request.files".
app.use(fileUpload());
// Archivos estáticos, middleware recursos statico
//app.use('/uploads', express.static('./static/uploads'));
app.use('/uploads', express.static(path.join(__dirname, '/static/uploads')));



/**
 * ###########################
 * ## Endopoins de usuarios ##
 * ###########################
 */

//Logear un usuario.
app.post('/users/login', loginUser);








/**
 * ##################################
 * ## Middleware Error & Not Found ##
 * ##################################
 */

app.use((error, req, res, next)=>{
    console.log("Middleware error ",error);
    res.status(error.httpStatus || 500).send({
        status: "error",
        message: error.message
    });
});

app.use((req, res) => {
    res.status(404).send({
        status: 'error',
        message: 'Not found',
    });
});

//Ponemos el servidor a escuchar un puerto
app.listen(PORT, () => {
    console.log(`Server listening http://localhost${PORT}`);
});




