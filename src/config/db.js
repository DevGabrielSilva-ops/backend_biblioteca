import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('biblioteca_db', (erro) =>{
    if(erro){
        console.log(`Erro ao conectar ao banco de dados: ${erro}`)
    } else {
        console.log('Conexão ao banco de dados bem suceedida!!')
    }
})

export default db;