const Category =  require("../models/CategoryModel")
const { validationResult } = require("express-validator");
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

exports.CreateCategory = async (req, res) =>{

  
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(500).json({
            message: "Error ao salvar o user...",
            result: errors
        })
        return
    }
        
        const categoria = req.body.categoria
        const fotoCategoria = req.body.fotoCategoria
        
        const newCategory = await Category.create({
            categoria,
            fotoCategoria
        })
        
        console.log(newCategory)
        
        res.status(201).json({
            message: "Categoria criado com sucesso!!"
        })
    } 

exports.GetCategories = async (req, res)=>{
    const AllCategories = await Category.findAll()

    console.log(AllCategories)

    res.status(201).json({
        AllCategories
    })
}