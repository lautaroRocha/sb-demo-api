const citiesRouter = require('express').Router()

citiesRouter.get('/', (req, res)=>{

    const {provincia, ciudad} = req.query;
    if(provincia){
        switch(provincia){
            case('Catamarca'):
            res.send({
                'data':[
                    {"label":`San Fernando del Valle`, "value":`San Fernando del Valle`},
                    {"label":`Belén`, "value":`Belén`}, 
                    {"label":`Santa María`, "value":`Santa María`}
                ]})
            break;
            case('Jujuy'):
            res.send({
                'data':[
                    {"label":`San Salvador de Jujuy`, "value":`San Salvador de Jujuy`},
                    {"label":`Palpalá`, "value":`Palpalá`}, 
                    {"label":`Perico`, "value":`Perico`}
                ]})
            break;
            case('La%20Rioja'):
            res.send({
                'data':[
                    {"label":`La Rioja`, "value":`La Rioja`},
                    {"label":`Chamical`, "value":`Chamical`}, 
                    {"label":`Chilecito`, "value":`Chilecito`}
                ]})
            break;
        }
    }else{
        res.send({
            'data':[
                {"label":`Barrio 1 ${ciudad}`, "value":`Barrio 1 ${ciudad}`},
                {"label":`Barrio 1 ${ciudad}`, "value":`Barrio 2 ${ciudad}`}, 
                {"label":`Barrio 1 ${ciudad}`, "value":`Barrio 3 ${ciudad}`}
            ]})
    }

})


module.exports = citiesRouter