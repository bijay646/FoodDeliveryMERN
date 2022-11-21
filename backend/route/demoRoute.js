const express = require('express')
const { demoFunction } = require('../controller/demoController')
const router = express.Router()

router.get('/second',(req, res)=>{
    return res.send("this is from route.")
})
router.get('/third', demoFunction)

module.exports = router