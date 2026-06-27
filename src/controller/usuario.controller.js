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

async function deletarUsuarioController (req,res) {
    const id = req.params.id
    try {
      const usuarioDeletado = await usuarioServices.deletarUsuarioService(id)
      res.status(200).send('Usuário deletado com sucesso!')
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

async function alterarUsuarioController(req,res) {
    try{
      const id = req.params.id
      const {nome} = req.body

      const usuarioAlterado = await usuarioServices.alterarUsuarioService(id,nome)
       res.status(200).send({message: "Usuário alterado", nome} )

    } catch (e){
      res.status(400).send({
        message: e.message
      })
    }
}
export default {
    criarUsuarioController,
    listarUsuariosController,
    alterarUsuarioController,
    deletarUsuarioController
}