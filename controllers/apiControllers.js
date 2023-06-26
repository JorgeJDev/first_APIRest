

const Servicio = require('../models/servicioModel');

// get todos los servicios

const getServicios = async (req, res) => {

    try {

        const servicios = await Servicio.find()

        return res.status(200).json({
            ok: true,
            msg: 'Obteniendo todos los servicios',
            total_servicios: servicios.length,
            limit: 30,
            data: servicios
        })

    } catch (error) {

        return res.status(404).json({
            ok: false,
            msg: 'Error al obtener los servicios'
        })
    }
}

// get un servicio

const getServicio = async (req, res) => {

    try {

        const id = req.params.id;
        const servicios = await Servicio.findById(id)

        if (!servicios) {
            return res.status(404).json({
                ok: false,
                msg: 'CUATROCIENTOS CUATRO NOOOOOO!'
            })

        } else {
           return res.status(200).json({
                ok: true,
                msg: 'Obteniendo un servicio',
                data: servicios
            })
        }


    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'Error al obtener los servicios'

        })
    }

}

// crear un servicio (post)

const crearServicio = async (req, res) => {


    const newServicio = new Servicio(req.body);

    try {

        const servicios = await newServicio.save()

        return res.status(201).json({
            ok: true,
            msg: 'Servicio creado',
            data: servicios
        })

    } catch (error) {

        console.log(error)

        return res.status(500).json({
            ok: false,
            msg: 'ERROR: no se ha podido crear el servicio.'
        });

    };

}


// actualizar un servicio (put)

const actualizarServicio = async (req, res) => {

    try {

        const id = req.params.id;
        const servicio = req.body.servicio;
        const descripcion = req.body.descripcion;

        const servicioActualizado = await Servicio.findByIdAndUpdate({ _id: id }, { $set: { servicio, descripcion } }, { new: true })

        if (!servicioActualizado) {
            return res.status(404).json({
                ok: false,
                msg: 'CUATROCIENTOS CUATRO NOOOOOO!'
            })
            
        }else {
            return res.status(200).json({
            ok: true,
            msg: 'Actualizando un servicio',
            data: servicioActualizado,
        })
    }

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Error al actualizar el servicios'
        })
    }

}


// eliminar un servicio

const eliminarServicio = async (req, res) => {

    try {

        const id = req.params.id;
       
       
        const servicios = await Servicio.findById(id)
        if (!servicios) {
            return res.status(404).json({
                ok: false,
                msg: 'CUATROCIENTOS CUATRO NOOOOOO!'
            })
            
        }
        else {
          await Servicio.findByIdAndDelete({ _id: id });
            return res.status(200).json({
            ok: true,
            msg: 'Eliminado el servicio',
        })
    }

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'Error al eliminar el servicios'
        })

    }
}

module.exports = {

    getServicios,
    getServicio,
    crearServicio,
    actualizarServicio,
    eliminarServicio

}