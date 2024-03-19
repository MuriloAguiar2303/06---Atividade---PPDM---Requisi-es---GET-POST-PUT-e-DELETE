const mysql2 = require("mysql2/promise");

async function connect() {
    if (global.connection && global.connection.state !== 'disconnected') {
        return global.connection
    }
    const con = await mysql2.createConnection({
        host: "localhost",
        port: "3306",
        database: "contatos",
        user: "root",
        password: "1234"
    });
    console.log("Conectou no Myslq2")
    global.connection = con;
    return con;
};

module.exports = {connect}