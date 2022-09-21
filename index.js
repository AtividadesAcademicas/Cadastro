const express = require('express')
const app = express()

app.get("/", (req, resp) => {resp.send("Bem vindo ao meu app")})
app.get("/cadastrousuario", (req, resp) => {resp.send("Esta é uma rota para uma página")})
app.get("/login", (req, resp) => {resp.send("Esta é uma rota para outra página")})

app.listen(8081, () => {console.log('Servidor rodando na url http://localhost:8081')})