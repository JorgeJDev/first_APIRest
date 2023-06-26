const jwt = require('jsonwebtoken');

const generarJWT =(uid, nombre) => {

    return new Promise((resolve, reject) => {


        let payload = { uid, nombre };
       
        jwt.sign(
            payload,
            process.env.JWT_SECRET_KEY,
            { expiresIn: '3h' },
            (error, token) => {
                if (error) {
                    console.log(error)
                    reject('error al generar el token')
                }

                resolve(token)

            }
        )
    })
}

//usaremos el token en el login y en el renew token
module.exports={
    generarJWT
};