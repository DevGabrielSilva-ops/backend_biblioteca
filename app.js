import express from 'express'
const app = express()
const PORT = 3000
app.use(express.json())

const users = []

app.get('/', (req,res) =>{
    res.send(banco)
})

app.post('/usuarios', (req,res) => {
    const dados = req.body
    users.push(dados)
    res.status(201).send('Usuário Criado com Sucesso!')
})

app.get('/usuarios', (req,res) => {
    res.send({users})
})

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))