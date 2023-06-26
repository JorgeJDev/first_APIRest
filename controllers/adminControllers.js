const {consulta}=require('../helpers/fetch')


const mostrarServicios = async (req, res) => {

    const url = 'servicios';
    const method = 'get';

    const respuesta = await consulta(url, method);

    const {data} = await respuesta.json()

    res.render('../views/admin/mostrarServicios',{
        titulo: 'Servicios',
        parrafo: 'cosas de servicios',
        servicios: data
    });

};


const crearServicio = async (req, res) => {


    const url = 'servicios';
    const method = 'post';

    await consulta(url, method, req.body);


    res.redirect('/admin/servicios');

};




const formularioCrearServicio = async (req, res) => {

    res.render('../views/admin/crearServicios.ejs');

};


const actualizarServicio = async (req, res) => {

    const id = req.params.id;

    const url = `servicios/${id}`;
    const method = 'put';

    await consulta(url, method, req.body);


    res.redirect('/admin/servicios');

};


const formularioActualizarServicio = async (req, res) => {
    
    const id = req.params.id;

    const url = `servicios/${id}`;
    const method = 'get';

    const respuesta = await consulta(url, method);

    const {data} = await respuesta.json()


    res.render('../views/admin/actualizarServicios',{
        servicios: data
    });

};

const eliminarServicio = async (req, res) => {

    const id = req.params.id;

    const url = `servicios/${id}`;
    const method = 'delete';

    const {servicios, descripcion} = req.body;
    const body = {servicios, descripcion};

    await consulta(url, method, body);


    res.redirect('/admin/servicios');

};


module.exports = {
    mostrarServicios,
    crearServicio,
    actualizarServicio,
    formularioActualizarServicio,
    formularioCrearServicio,
    eliminarServicio
};