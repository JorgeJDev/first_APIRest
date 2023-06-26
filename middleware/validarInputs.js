const {validationResult}=require('express-validator');

const validarInputs = (req,res,next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json ({
            ok:false,
            erores:errors.mapped()
        })
    }
    next()
}


module.exports={
    validarInputs
}