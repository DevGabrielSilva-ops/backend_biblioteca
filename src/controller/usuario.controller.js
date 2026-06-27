import usuarioServices from '../services/usuario.services.js'

async function criarUsuarioController (req, res) {
    const novoUsuario = req.body;

    try {
        const user = await usuarioServices.criarUsuarioService(novoUsuario)
        res.status(201).send({user})
    } catch (e) {
        res.status(400).send(e.message)
    }
}


async function listarUsuariosController(req, res) {
  try {
    const usuarios = await usuarioServices.listarUsuariosService()

    return res.status(200).send({usuarios})

  } catch (e) {
    return res.status(500).send({
      mensagem: e.message
    })
  }
}
export default {
    criarUsuarioController,
    listarUsuariosController
}