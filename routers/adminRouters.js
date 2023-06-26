

const express = require('express');
const router = express.Router();

const {mostrarServicios, crearServicio, formularioActualizarServicio, eliminarServicio, actualizarServicio, formularioCrearServicio} = require('../controllers/adminControllers');



router.get('/servicios', mostrarServicios);

router.post('/servicios/crearservicio', crearServicio);
router.get('/servicios/formulariocrear', formularioCrearServicio);

router.post('/servicios/actualizar/:id', actualizarServicio); 
router.get('/servicios/formularioactualizar/:id', formularioActualizarServicio);

router.get('/servicios/eliminar/:id', eliminarServicio);





module.exports = router;

