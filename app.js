const express = require("express");
const app = express();
const port = 3030;

(async () =>{
    const database = require("./dbConnect")
    await database.sync()
})()


const authRoutes = require("./routes/authRoutes")
const userRoutes = require("./routes/userRoutes")
const productsRoutes = require("./routes/productsRoutes")

app.use(express.json())

app.use("/auth", authRoutes)
app.use("/user", userRoutes)
app.use("/products", productsRoutes)

app.listen(port, ()=>{
    console.log("servidor rodando, porta:"+port)
})

