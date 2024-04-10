const express = require("express");
const app = express();
const port = 3030

const userRoutes = require("./routes/authRoutes")

app.use(express.json())

app.use("/auth", userRoutes)

app.listen(port, ()=>{
    console.log("servidor rodando, porta:"+port)
})

