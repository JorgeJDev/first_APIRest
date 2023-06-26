const jwt=require('jsonwebtoken');

const validarJWT= (req,res,next) => {

    const token = req.header('x-token');
    
    console.log(token);

    if (!token) {
        return res.status(401).json({
            ok:false,
            msg: 'no existe token'
        })
    }

    try {
        
        const payload =jwt.verify(token,process.env.JWT_SECRET_KEY);

        req.id=payload.id
        req.nombre=payload.nombre

    } catch (error) {

        return res.status(500).json({
            ok:false,
            msg: 'no hay token valido'
        })
    }
    next()
}



module.exports= {
    validarJWT
}