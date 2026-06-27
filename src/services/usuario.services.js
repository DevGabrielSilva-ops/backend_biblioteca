import usuarioRepository from '../repositories/usuario.repositories.js'

async function criarUsuarioService(novoUsuario){
    const procurarUsuario = await usuarioRepository.procurarUsuarioPorEmailRepository(novoUsuario.email)

    if(procurarUsuario) {
        throw new Error ("Esse usuário ja existe!")
    }

    const usuario = await usuarioRepository.criarUsuarioRepository(novoUsuario)
    return usuario
}

async function listarUsuariosService() {
  const usuarios = await usuarioRepository.listarUsuariosRepository()
  return usuarios
}

export default {
    criarUsuarioService,
    listarUsuariosService
}