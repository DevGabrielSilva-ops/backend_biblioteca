import db from '../config/db.js'

await db.execute(`
  CREATE TABLE IF NOT EXISTS usuario (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_usuario VARCHAR(300) UNIQUE NOT NULL,
    email VARCHAR(300) UNIQUE NOT NULL,
    senha VARCHAR(300) NOT NULL,
    avatar VARCHAR(300)
  )
`)

async function criarUsuarioRepository(novoUsuario) {
  const { nome_usuario, email, senha, avatar } = novoUsuario

  const [resultado] = await db.execute(
    `INSERT INTO usuario (nome_usuario, email, senha, avatar)
     VALUES (?, ?, ?, ?)`,
    [nome_usuario, email, senha, avatar]
  )

  return {
    id: resultado.insertId,
    ...novoUsuario
  }
}

async function procurarUsuarioPorEmailRepository(email) {
  const [rows] = await db.execute(
    `SELECT id, nome_usuario, email, avatar
     FROM usuario
     WHERE email = ?`,
    [email]
  )

  return rows[0]
}

async function procurarUsuarioPorNomeRepository(nome) {
  const [rows] = await db.execute(
    `SELECT id, nome_usuario, email, avatar
     FROM usuario
     WHERE nome_usuario = ?`,
    [nome]
  )

  return rows[0]
}

async function procurarUsuarioPorIdRepository(id) {
  const [rows] = await db.execute(
    `SELECT id, nome_usuario, email, avatar FROM usuario 
     WHERE id = ?`,
    [id]
  )

  return rows[0]
}

async function listarUsuariosRepository() {
  const [rows] = await db.execute(
    `SELECT id, nome_usuario, email, avatar
     FROM usuario`
  )

  return rows
}

async function alterarUsuariosRepository(id,novoUsuario) {
  const {nome,email,senha,avatar} = novoUsuario
  const [rows] = await db.execute(
    `UPDATE usuario
    SET nome_usuario = ?, email = ?, senha = ?, avatar = ?
    WHERE id = ?`,
    [nome,email,senha,avatar,id]
  )

  return rows
}

async function deletarUsuarioRepository(id){
    const [rows] = await db.execute(
      `DELETE FROM usuario
       WHERE id = ? `,
       [id]
    )

    return rows
}


export default {
  criarUsuarioRepository,
  procurarUsuarioPorEmailRepository,
  listarUsuariosRepository,
  alterarUsuariosRepository,
  procurarUsuarioPorNomeRepository,
  deletarUsuarioRepository,
  procurarUsuarioPorIdRepository
}