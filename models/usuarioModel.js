const {Schema, model} = require('mongoose');

const UsuariosSchema = new Schema ({

    nombre:{
        type:String,
        required:true,
    },

    email:{

       type:String,
       required:true,
       unique: true,

    },

    password: {
        type:String,
        default:true,
    },

    fecha: {
        type:Date,
        default:Date.now,
    }
})

module.exports=model('Usuarios', UsuariosSchema)