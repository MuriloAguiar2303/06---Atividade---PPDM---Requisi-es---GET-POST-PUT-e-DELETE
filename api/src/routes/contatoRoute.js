const express = require("express");
const router = express.Router();
const {contatoController} = require("../controllers/contatoController");

router.get("/contatos",contatoController.selectContatos);
router.get("/contatos/:nome",contatoController.selectContatosName);
router.post("/contatos",contatoController.contatosInsert);
router.put("/contatos/:id",contatoController.updateCliente);
router.delete("/contatos/:id",contatoController.apagaContatos);


module.exports = router;