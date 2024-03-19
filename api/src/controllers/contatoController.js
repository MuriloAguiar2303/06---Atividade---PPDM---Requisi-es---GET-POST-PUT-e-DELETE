const modelContatos = require("../models/contatoModel");

const contatoController = {
    selectContatos: async (req, res) => {
        try {
            const contato = await modelContatos.selecionaTodosContatos();
            return res.json(contato)
        } catch (error) {
            throw error;
        }
    },
    selectContatosName: async (req, res) => {
        try {
            const { nome} = req.params;
            const selectId = await modelContatos.selecionaContatoNome(nome);
            return res.json(selectId)
        } catch (error) {
            throw error;
        }
    },

    contatosInsert: async (req, res) => {
        try {
            const { nome, tel_cel,tel_fixo,email } = req.body;
            const insert = await modelContatos.insertContatos({ nome: nome, tel_cel: tel_cel, tel_fixo:tel_fixo,email:email });
            return res.status(200).json({ message: "Contato cadastrado com com sucesso!" });
        } catch (error) {
            throw error;
        }
    },

    updateCliente: async (req, res) => {
        try {
            const { id } = req.params;
            const { nome, tel_cel,tel_fixo,email } = req.body;
            const update = await modelContatos.updateContatos(id, { nome: nome, tel_cel: tel_cel, tel_fixo:tel_fixo,email:email });
            return res.status(200).json({ message: "Cliente atualizado com com sucesso!" });
        } catch (error) {
            throw error;
        }
    },

    apagaContatos: async (req, res) => {
        try {
            const { id } = req.params;
            const apaga = await modelContatos.deleteContatos(id);
            return res.status(200).json({ message: "Cliente deletado com com sucesso!" });
        } catch (error) {
            throw error;
        }
    },
}

module.exports = { contatoController }