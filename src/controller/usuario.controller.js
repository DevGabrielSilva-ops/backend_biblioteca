import usuarioServices from '../services/usuario.services.js'

async function criarUsuarioController (req, res) {
    const novoUsuario = req.body;

    try {
        const user = usuarioServices.criarUsuarioService(novoUsuario)
        res.status(201).send({user})
    } catch (err) {
        return res.status(400).send(err)

    }
}

export default {
    criarUsuarioController
}