import mysql2 from 'mysql2/promise'

const db = await mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "biblioteca"
})

if(!db){
    console.log(`Não foi possivel a conexão com o banco`)
} else {
    console.log("Conexão com o banco bem suceedida!!")
}

export default db