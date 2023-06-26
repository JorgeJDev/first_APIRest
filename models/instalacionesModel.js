const {Schema, model} = require('mongoose');

const InstalacionesSchema = new Schema ({

    nombre:String,
    descripcion:{

       type:String,
       required:true,
       trim:true 

    },
})

module.exports=model('Instalaciones', InstalacionesSchema)