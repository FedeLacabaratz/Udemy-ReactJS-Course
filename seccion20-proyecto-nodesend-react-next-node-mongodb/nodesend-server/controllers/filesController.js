const multer = require('multer');
const shortid = require('shortid');
const fs = require('fs');
const Enlaces = require('../models/Enlace');

exports.uploadFile = async (req, res, next) => {
    
    const configuracionMulter = {
        limits: { fileSize: req.usuario ? 10000000 : 1000000 },
        storage: fileStorage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, __dirname+'/../uploads')
            },
            filename: (req, file, cb) => {
                const extension = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
                cb(null, `${shortid.generate()}${extension}`);
            }
            // Para cuando queremos validar que no suban un formato en particular, en este caso pdf 
            // fileFilter: (req, file, cb) => {
            //     if(file.mimetype === "application/pdf") {
            //         return cb(null, true);
            //     }
            // }
        })
    };
    
    const upload = multer(configuracionMulter).single('archivo');
    
    upload(req, res, async (error) => {
        if(!error) {
            res.json({archivo: req.file.filename});
        } else {
            console.log(error.message);
            return next
        }
    });
};

exports.deleteFile = async (req, res) => {
    try {
        fs.unlinkSync(__dirname + `/../uploads/${req.file}`);
    } catch (error) {
        console.log(error.message);
    }
};

// Descarga un archivo
exports.download = async (req, res, next) => {

    // Obtiene el enlace
    const { file } = req.params;
    const enlace = await Enlaces.findOne({ nombre: file });

    const downloadableFile = __dirname + '/../uploads/' + file;
    res.download(downloadableFile);

    // Eliminar el archivo y la entrada de la base de datos
    // Si las descargas son iguales a 1 borrar la entrada y el archivo
    const { descargas, nombre } = enlace;

    if(descargas === 1) {
        // Eliminar el archivo
        req.file = nombre;
        // Eliminar la entrada de la base de datos
        await Enlaces.findOneAndRemove({ nombre: nombre});
        next();
    } else {
        // Si las descargas son > 1, entonces restar 1
        enlace.descargas--;
        await enlace.save();
    }
};