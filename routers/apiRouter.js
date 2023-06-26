const express = require("express");

const router = express.Router();


const { check } = require('express-validator');

const { validarInputs } = require('../middleware/validarInputs');


const { getServicios, getServicio, crearServicio, actualizarServicio, eliminarServicio } = require("../controllers/apiControllers");


// get todos
router.get('/', getServicios);


// get uno
router.get('/:id', getServicio);


// crear uno (post)
router.post('/', 

    [check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    validarInputs],   // servicio es body.servicio y el mensaje del error
    crearServicio);


// actualizar uno (put)
router.put('/:id',

    [check('nombre', 'El servicio es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    validarInputs],  // servicio es body.servicio y el mensaje del error
    actualizarServicio);


// elminar uno
router.delete('/:id', eliminarServicio);

//Exportamos 
module.exports = router