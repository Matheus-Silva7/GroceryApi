const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

module.exports = async (req, res, next) => {
  const userId = req.userId
  const user = await User.findOne({
    where: {
      id: userId
    }
  })


  
  if (!user.admin) {
    res.status(401).json({
      message: "Usuario não é admin!"
    })
    return
  }

  next()
}