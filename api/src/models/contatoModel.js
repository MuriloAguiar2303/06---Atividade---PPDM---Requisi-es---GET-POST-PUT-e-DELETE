const {connect}  = require("../config/db");

const modelContatos = {
    selecionaTodosContatos: async () => {
        try {
            const conn = await connect();
            const [rows] = await conn.query("select * from tbl_contatos;");
            return rows;
        } catch (error) {
            throw error;
        }
    },

    selecionaContatoId: async (id) => {
        try {
            const conn = await connect();
            const sql = "SELECT * FROM tbl_contatos WHERE id=?;";
            const values = id;
            const [rows] = await conn.query(sql, values);
            return rows;
        } catch (error) {
            throw error;
        }
    },

    insertContatos: async (tbl_contatos) => {
        try {
            const conn = await connect();
            const sql = "insert into tbl_contatos(nome,tel_cel,tel_fixo,email) values (?,?,?,?);";
            const values = [tbl_contatos.nome, tbl_contatos.tel_cel,tbl_contatos.tel_fixo,tbl_contatos.email];
            return await conn.query(sql, values);
        } catch (error) {
            throw error;
        }
    },

    updateContatos: async (id,tbl_contatos) => {
        try {
            const conn = await connect();
            const sql = "update tbl_contatos set nome = ?, tel_cel = ?,tel_fixo=?, email=? where id=?;";
            const values = [tbl_contatos.nome, tbl_contatos.tel_cel,tbl_contatos.tel_fixo,tbl_contatos.email,id];
            return await conn.query(sql, values);
        } catch (error) {
            throw error;
        }
    },

    deleteContatos:async(id)=>{
        try{
            const conn = await connect();
            const sql ='delete from tbl_contatos where id=?;';
            const values = id;
            return await conn.query(sql,values)
        }catch(error){
            throw error;
        }
    },
}

module.exports = modelContatos
