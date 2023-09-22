// const { response } = require("express")
const User = require("../models/User")

module.exports = {
    // Função responsável por buscar todos os usuários que foram cadastrados na aplicação
    async index(request, response) {
        // Método findAll() é utilizado para buscar por todos os dados dos usuários existentes no banco de dados.
        // Utilizamos a propriedade raw com o valor true(verdadeiro), porque a função findAll() vai trazer informações desnecessárias, por isso para retornar somente um array de objetos, passamos essa propriedade. 
        const users = await User.findAll({ raw: true})

        return response.json(users)
    },
    async index1(request, response) {

        const { id } = request.params
        // Método findAll() é utilizado para buscar por todos os dados dos usuários existentes no banco de dados.
        // Utilizamos a propriedade raw com o valor true(verdadeiro), porque a função findAll() vai trazer informações desnecessárias, por isso para retornar somente um array de objetos, passamos essa propriedade. 
        const users = await User.findOne({ where: { id: id } })

        return response.json(users)
    },
    // Função responsável por cadastrar os usuários na aplicação
    async store(request, response){
        // Destruturando um objeto e passando as propriedades name e email no corpo da requisição.
        const { name, email } = request.body

        // Inserindo os dados do usuário no banco de dados
        const user = await User.create({ name, email })

        // Retornando uma resposta no formato json.
        return response.json(user)
    },

    async update(request, response){
        // Enviando o id nos parametros da requisicao
        const { id } = request.params

        const { name, email } = request.body

        const user = await User.update(
            { name, email }, { where: { id: id } }
        )
        
        // retorno uma resposta no formato json()
        return response.json(user)
    },

    async delete(request, response){
        // Enviando o id nos parametros da requisicao
        const { id } = request.params
        // funcao destroy() do sequelize é usada para deletar um registro no banco de dados
        const user = await User.destroy( { where: { id: id } }
        );

        // retorno uma resposta no formato json()
        return response.json(user)
    },
}




// funções sincronas = da primeira a última --- funções assincronas(async) = da função mais rápida 