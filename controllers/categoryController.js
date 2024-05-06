const Category =  require("../models/CategoryModel")
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

exports.CreateCategory = async (req, res) =>{

    const userId = req.userId
    const user = await User.findOne({
        where: {
            id: userId
        }
    })

    if(user.admin === true){

        
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
    } else{
        res.status(401).json({
            message: "Usuario não é admin"
        })
    }
}

exports.GetCategories = async (req, res)=>{
    const AllCategories = await Category.findAll()

    console.log(AllCategories)

    res.status(201).json({
        AllCategories
    })
}