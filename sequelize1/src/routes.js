// Importando o framework express
const express = require("express")
const UserController = require("./controllers/UserController")

// Importando o arquivo do UserController, que contém as funções de criar, buscar, atualizar e deletar os dados do usuário.

// Inicializar as rotas
const routes = express.Router()

// Criando a rota /users utilizando o método post para cadastrar o usuário na aplicação/banco de dados.
routes.post("/users", UserController.store)

// Rota para buscar os dos dos usuários que foram cadastrados no banco de dados.
routes.get("/users", UserController.index)

routes.get("/users/:id", UserController.index1)

routes.put("/users/:id", UserController.update)

routes.delete("/users/:id", UserController.delete)

module.exports = routes 
