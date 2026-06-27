import usuarioRepository from '../repositories/usuario.repositories.js'
import bcrypt from 'bcrypt'

async function criarUsuarioService(novoUsuario){
    const procurarUsuario = await usuarioRepository.procurarUsuarioPorEmailRepository(novoUsuario.email)

    if(procurarUsuario) {
        throw new Error ("Esse usuário ja existe!")
    }

    const senhaHash = await bcrypt.hash(novoUsuario.senha, 10)
    const usuario = await usuarioRepository.criarUsuarioRepository({...novoUsuario, senha: senhaHash})
    if(!usuario) {
        throw new Error ("Erro ao criar usuário!")
    }
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