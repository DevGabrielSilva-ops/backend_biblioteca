import express from 'express'
import usuarioRouters from './src/routes/usuario.routes.js'
const app = express()
const PORT = 3000

app.use(express.json())
app.use(usuarioRouters)



app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))