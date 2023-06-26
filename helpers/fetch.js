const urlBase = 'http://localhost:3000/api/v1';


const consulta = async (url, method, body={}) => { 

    let options = {}; 

    try {

        if(method == 'post' || method == 'put'){
            const data = {...body};
            options = {
                method: method,
                body: JSON.stringify(data), 
                headers:{
                    'Content-Type': 'application/json'    
                }
            };
        };

        if(method == 'delete'){
            options = {
                method,
           
            }
        };

        return await fetch(`${urlBase}/${url}`, options);
        
    } catch (error) {

        console.log(error);

};

}

module.exports = {consulta};

