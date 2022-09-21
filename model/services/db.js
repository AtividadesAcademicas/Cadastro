async function connect(){
    if(global.connection && global.connect.state !== 'disconnected'){
        return global.connection
    }
    const mysql = require("mysql2/promise")
    const connection = await mysql.createConnection("mysql://root:alunofatec@localhost:3306/WebII")
    console.log("Conectado ao MySQL!")
    global.connection = connection
    return connection
}

// BUSCAR NA TABELA USUARIO
async function selectUsuario(){
    const conn = await connect()
    const [rows] = await conn.query('SELECT * FROM usuario;')
    return rows
}
module.exports = {selectUsuario}