const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

exports.profile = async (req, res) =>{
    const userId = req.userId
    const user = await User.findOne({
        where: {
            id: userId
        }
    })

    res.status(201).json({
       user
    })
}