const branchRouter = require('express').Router()

branchRouter.get('/', (req, res)=>{

    const {sucursal} = req.query;

    let branch = '';
    switch(sucursal){
        case('1'):
        branch = 'Talcahuano';
        break;
        case('2'):
        branch = 'Mario Bravo';
        break;
        case('3'):
        branch = 'Mogotes';
        break
    }

    res.send({
            'data':[
                {"label":`CAJA 1 / ${branch}`, "value":`CAJA 1 / ${branch}`},
                {"label":`CAJA 2 / ${branch}`, "value":`CAJA 2 / ${branch}`}, 
                {"label":`CAJA 3 / ${branch}`, "value":`CAJA 3 / ${branch}`}
            ]})
})


module.exports = branchRouter