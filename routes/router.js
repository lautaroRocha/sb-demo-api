const router = require('express').Router()
const branchRouter = require('./branches/router')
const citiesRouter = require('./cities/router')

router.get('/', (req, res)=>{
    res.send({
    "record": 
        [{"label":`Atención al Cliente`, "value":`Atención al Cliente`},
        {"label":`Comercial`, "value":`Comercial`}, 
        {"label":`Administración`, "value":`Administración`}]
    }
)
})

router.use('/branches', branchRouter)
router.use('/cities', citiesRouter)


module.exports = router