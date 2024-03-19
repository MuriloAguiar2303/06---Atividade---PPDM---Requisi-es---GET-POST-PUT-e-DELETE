const express = require("express");
const app = express();
const contatosRoute = require("./src/routes/contatoRoute");
app.use(express.json());
app.use("/",contatosRoute)
app.listen(3000, () => {
    console.log("Servidor respondendo na porta 3000")
})