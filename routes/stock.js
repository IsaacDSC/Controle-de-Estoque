const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('stock/stock')
})

module.exports = router