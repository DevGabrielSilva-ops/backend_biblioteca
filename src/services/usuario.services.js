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

async function deletarUsuarioService(id) {
    
    const usuarioId = await usuarioRepository.procurarUsuarioPorIdRepository(id)

    if(!usuarioId){
        throw new Error ("Esse usuário não existe")
    }  

    const usuarioDeletado = await usuarioRepository.deletarUsuarioRepository(id)
    return usuarioDeletado
}

async function alterarUsuarioService(id,novoUsuario) {
    const procurarUsuarioNome = await usuarioRepository.procurarUsuarioPorNomeRepository(novoUsuario.nome)
    const procurarUsuarioId = await usuarioRepository.procurarUsuarioPorIdRepository(id)

    if(!procurarUsuarioId){
        throw new Error("Esse usuário não existe")
    }
    
     if(procurarUsuarioNome) {
        throw new Error("Já existe um usuário com esse username")
        
    }
    
    if(novoUsuario.senha){
        novoUsuario.senha = await bcrypt.hash(novoUsuario.senha,10)
    }
    
    const usuarioAlterado = await usuarioRepository.alterarUsuariosRepository(id,novoUsuario)
    
    
    
   
    if(!usuarioAlterado) {
        throw new Error("Não foi possivel alterar o usuario");     
    } 

    return usuarioAlterado
}

async function listarUsuariosPorIdService(id) {
    const usuarios = await usuarioRepository.procurarUsuarioPorIdRepository(id)
    if(!usuarios) throw new Error('Usuário não encontrado')
    return usuarios
}

export default {
    criarUsuarioService,
    listarUsuariosService,
    alterarUsuarioService,
    deletarUsuarioService,
    listarUsuariosPorIdService
}