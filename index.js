const express = require('express')
const app = express()

console.log('SELECT * FROM USUARIO')
const usuarios = await db.selectUsuario()
console.log(usuarios)

console.log('INSERT INTO USUARIO')
const result = await db.insertUsuario({nome: "Zé", senha: "815iakg"})
console.log(result)

console.log('DELETE FROM usuario')
const result3 = await db.deleteUsuario(2)
console.log(result3)

console.log('UPDATE USUARIO')
const result2 = await db.updateUsuario(3, {nome: "Zé José", senha: "234tjkhdf834"})
console.log(result2)

app.get("/", (req, resp) => {resp.send("Bem vindo ao meu app")})
app.get("/cadastrousuario", (req, resp) => {resp.send("Esta é uma rota para uma página")})
app.get("/login", (req, resp) => {resp.send("Esta é uma rota para outra página")})

app.listen(8081, () => {console.log('Servidor rodando na url http://localhost:8081')})