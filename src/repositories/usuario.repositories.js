import { resolve } from 'node:dns'
import db from '../config/db.js'

db.run(`
    CREATE TABLE IF NOT EXISTS usuario(
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        nome_usuario TEXT UNIQUE NOT NULL,
        email TEXT NOT NULL,
        senha TEXT NOT NULL,
        avatar TEXT
    )
    `)

function criarUsuarioRepository(novoUsuario){
    return new Promise ((res,rej) => {
        const { nome_usuario, email, senha, avatar} = novoUsuario
        db.run(
            `INSERT INTO usuario (nome_usuario,email,senha,avatar) VALUES (?,?,?,?)`,
            [nome_usuario, email, senha, avatar],
            (err) => {
            if(err){
                rej(err)
            } else {
                res({id: this.lastID, ...novoUsuario})
            }
        }
        )

        
    })
}

function procurarUsuarioPorEmailRepository(email){
    return new Promise ((res,rej) => {
        

        db.get(
            `SELECT id,nome_usuario,email,avatar 
            FROM usuario
            WHERE email = ?`,
            
            [email], 
            
            (err,row) => {
                if(err){
                    rej(err)
                } else {
                    res(row)
                }
            }


        )
    })
}

function listarUsuariosRepository() {
  return new Promise((res, rej) => {
    db.all(
      `SELECT id, nome_usuario, email, avatar FROM usuario`,
      [],
      (err, rows) => {
        if (err) {
          rej(err)
        } else {
          res(rows)
        }
      }
    )
  })
}

export default {
    criarUsuarioRepository,
    procurarUsuarioPorEmailRepository,
    listarUsuariosRepository
}