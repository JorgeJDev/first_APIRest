const express = require("express");

const router = express.Router();

const {validarJWT}=require('../middleware/validarJWT')


const { check } = require('express-validator');

const { validarInputs } = require('../middleware/validarInputs');


const { getUsuarios, getUsuario, crearUsuario, loginUsuario, eliminarUsuario, renew } = require("../controllers/usuariosController");


// get todos
router.get('/', getUsuarios);



// get uno
router.get('/:id', getUsuario);


// crear uno (post)
router.post('/new', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'No es un email correcto').isEmail(),
    check('password', 'La contraseña debe tener al menos 4 caracteres').isLength({ min: 4},{ max:10}),
    validarInputs
],   // servicio es body.servicio y el mensaje del error
    crearUsuario);


// login uno (post)
router.post('/login', [
    check('email', 'No es un email correcto').isEmail(),
    check('password', 'La contraseña debe tener al menos 4 caracteres').isLength({ min: 4 },{ max:10}),
    validarInputs
],  // servicio es body.servicio y el mensaje del error
    loginUsuario);


// renovar token de login/registro
router.get('/renew',validarJWT, renew);


// elminar uno
router.delete('/:id', eliminarUsuario);


//Exportamos 
module.exports = router








