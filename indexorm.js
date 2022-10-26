(async () => {
    const database = require('model/services/dborm')
    const Cliente = require('model/entidades/cliente')

    //CRIAR TABELA
    console.log('Criar tabela ===========')
    const resultado = await database.sequelize.sync()
    console.log(resultado)

    //CRIAR REGISTRO NA TABELA
    console.log('Criar um registro ======')
    const inserirCliente = await Cliente.create({
        nome: 'João da Silva',
        idade: 10,
        endereco: 'Rua Paulista, n 1000'
    })
    console.log(inserirCliente)

    //BUSCAR UM REGISTRO NA TABELA
    console.log('Buscar um registro =====')
    const cliente = await Cliente.findByPk(1)
    console.log(cliente)

    //ALTERAR UM REGISTRO NA TABELA
    console.log('Alterar um registro ====')
    const clienteAlterar = await Cliente.findByPk(1)
    clienteAlterar.nome = "Pedro Pessina"
    const resultadoSave = await clienteAlterar.save()
    console.log(resultadoSave)

    //BUSCAR TODOS OS REGISTROS DA TABELA
    console.log('Buscar todos os registros')
    const clientes = await Cliente.findAll()
    console.log(clientes)

    //DELETAR UM REGISTRO DA TABELA
    console.log('Deletar o registro')
    const clienteDelete = await Cliente.findByPk(1)
    clienteDelete.destroy()
})