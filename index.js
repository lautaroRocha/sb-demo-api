const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routes/router')

app.use(cors())
app.use(router)
app.listen(7000, ()=>{
    console.log('Listening on 7000')
})
