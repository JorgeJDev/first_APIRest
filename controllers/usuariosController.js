
const { generarJWT } = require('../helpers/jwt');

const Usuarios = require('../models/usuarioModel');

const bcrypt = require('bcryptjs')

// get todos los usuarios

const getUsuarios = async (req, res) => {

    try {

        const usuarios = await Usuarios.find()

        return res.status(200).json({
            ok: true,
            msg: 'Obteniendo todos los Usuarios',
            total_usuarios: usuarios.length,
            limit: 30,
            data: usuarios
        })

    } catch (error) {

        return res.status(404).json({
            ok: false,
            msg: 'Error al obtener los Usuarios'
        })
    }
}

// get un usuario

const getUsuario = async (req, res) => {

    try {

        const id = req.params.id;
        const usuarios = await Usuarios.findById(id)

        if (!usuarios) {
            return res.status(404).json({
                ok: false,
                msg: 'CUATROCIENTOS CUATRO NOOOOOO!'
            })

        } else {
            return res.status(200).json({
                ok: true,
                msg: 'Obteniendo un Usuario',
                data: usuarios
            })
        }


    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'Error al obtener los usuarios'

        })
    }

}

// crear un usuario (post)

const crearUsuario = async (req, res) => {


    const newUsuario = new Usuarios(req.body);
    const { email } = req.body

    try {

        const usuario = await Usuarios.findOne({ email })

        if (usuario) {

            return res.status(401).json({
                ok: false,
                msg: 'ERROR: ya existe el usuario.'
            });

        } else {


            let salt = bcrypt.genSaltSync(10);
            newUsuario.password = bcrypt.hashSync(req.body.password, salt)

            const usuarios = await newUsuario.save()

            const token=await generarJWT(newUsuario.id, newUsuario.nombre)

            return res.status(201).json({

                ok: true,
                msg: 'Usuario creado',
                token: token,

            })
        }


    } catch (error) {

        console.log(error)

        return res.status(500).json({
            ok: false,
            msg: 'ERROR: no se ha podido crear el usuario.'
        });

    };

}


// actualizar un usuario (post)

const loginUsuario = async (req, res) => {

    const { email } = req.body;

    try {

        const usuario = await Usuarios.findOne({ email });
       

        if (!usuario) { 


            return res.status(401).json({

                ok: false,
                msg: 'Usuario o contraseña incorrecto',
            });

        }
        
        const passOk = bcrypt.compareSync(req.body.password, usuario.password);

        if (!passOk) {

            return res.status(400).json({
                ok: false,
                msg: 'Contraseña no válida',
            })

        } 

            
            const token = await generarJWT(usuario._id, usuario.nombre)
            
            const user = {

                nombre: usuario.nombre,
                email: usuario.email,
                uid: usuario._id,
            }
        
            return res.status(200).json({
                ok: true,
                data: user,
                token,
            });
       

    } catch (err) {


        console.error(err);


        return res.status(500).json({
            ok: false,
            msg: 'Error interno del servidor',

        });
    }
};


const eliminarUsuario = async (req, res) => {

    try {

        const id = req.params.id;


        const usuario = await Usuarios.findById(id)
        if (!usuario) {
            return res.status(404).json({
                ok: false,
                msg: 'CUATROCIENTOS CUATRO NOOOOOO!'
            })

        }
        else {
            await Usuarios.findByIdAndDelete({ _id: id });
            return res.status(200).json({
                ok: true,
                msg: 'Eliminado el usuario',
            })
        }

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'Error al eliminar el usuario'
        })

    }
}


//renew 

const renew= async (req,res)=>{

    const{uid,nombre}=req;

    const token=await generarJWT(uid,nombre);

    return res.status(200).json({
        ok:true,
        user:{
            uid,
            nombre,
        },
        token
    })
}

module.exports = {

    getUsuarios,
    getUsuario,
    crearUsuario,
    loginUsuario,
    eliminarUsuario,
    renew,

}