const express = require("express");
const router = express.Router();


router.post('/singin', (req, res)=>{
    res.send("Rota do login")
})

router.post('/singup', (req, res)=>{
    res.send("Rota do cadastro")
})


module.exports = router;