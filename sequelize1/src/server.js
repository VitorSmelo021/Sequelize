const express = require("express")
const port = 4044

const routes = require("./routes")

require("./database/index")

const app = express()
app.use(express.json())

app.use(routes)

app.listen(port, () => console.log (`O Servidor está rodando na porta ${port}!😍`)); 