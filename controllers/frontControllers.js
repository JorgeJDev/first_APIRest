

const Servicio = require('../models/servicioModel');
const Instalaciones = require('../models/instalacionesModel');

const getIndex = (req, res) => {
    res.render('index', {
        titulo: 'Me gustan las cosas',
        parrafo: 'No me gustan las cosas',
    })
};

const getProductos = (req, res) => {
    res.render('productos', {
        titulo: 'Me gusta los productos',
        parrafo: 'No me gustan las cosas',
    })
};

const getQuienesSomos = (req, res) => {
    res.render('quienesSomos', {
        titulo: 'Me gusta quienes somos',
        parrafo: 'No me gustan las cosas',
    })
};

const getContacto = (req, res) => {
    res.render('contacto', {
        titulo: 'Me gustan el contacto',
        parrafo: 'No me gustan las cosas',
    })
};

const getServicios = async (req, res) => {

    try {
        const servicios = await Servicio.find()
            res.render('servicios', {
                titulo: 'Me gustan los servicios',
                parrafo: 'No me gustan las cosas',
                servicios,
                
            })
        

    } catch (error) {
        console.log(error)
    }
}

const getInstalaciones = async (req, res) => {

    try {
        const instalaciones = await Instalaciones.find()
                res.render('instalaciones', {
                titulo: 'Instalamos cosas',
                parrafo: 'No me gustan las instalaciones',
                instalaciones,
            })
        

    } catch (error) {
        console.log(error)
    }


}

module.exports = {
    getIndex,
    getProductos,
    getQuienesSomos,
    getContacto,
    getServicios,
    getInstalaciones,
}