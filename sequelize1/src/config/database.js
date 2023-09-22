module.exports = {
    dialect: "mysql", // banco de dados utilizado
    host: "localhost", // 
    username: "aluno_medio", 
    password: "@lunoSenai23.",
    database: "sequelize-node",
    define: { // definições extras e extremamentes importantes
        timestamps: true, 
        underscored: true 
    }
}

// configuração do banco de dados