import usuarioRepository from '../repositories/usuario.repositories.js'

async function criarUsuarioService(novoUsuario){
    const usuario = await usuarioRepository.criarUsuarioRepository(novoUsuario)
    return usuario
}

export default {
    criarUsuarioService
}