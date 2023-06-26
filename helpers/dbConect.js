const mongoose = require("mongoose")

const conexion = async () => {

     
    try {

        const respuesta = await mongoose.connect(process.env.URI_CONECT)
        console.log("estamos conectados a mongoose")
        return respuesta


    } catch (error) {

        return {
            ok: false,
            msg: 'Error al conectar',
            error
        }
    }

}

module.exports = {
    conexion
}