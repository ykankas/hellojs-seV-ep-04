// index.js
const knex = require("./config").knex
const op = process.argv[2]

switch (op){
case "insert":
    const contatoinsert =  {
        nome: process.argv[2],
        telefone: process.argv[3]
    }
    knex("contato").insert(contatoinsert).then(ret => {
    console.log(ret)
    process.exit(0) // finalizar execução do script
    })
break
;
case "update":
    const contatoupdate = {
         id: process.argv[2],
         nome: process.argv[3],
         telefone: process.argv[4]
    }
    knex("contato").where('id', contatoupdate.id).update(contatoupdate).then(ret => {
    console.log(ret)
    process.exit(0) // finalizar execução do script
    })
break
;
case "delete":
    const iddel = process.argv[3]
    knex("contato").where('id', iddel).del().then(ret => {
    console.log(ret)
    process.exit(0) // finalizar execução do script
    })
break
;
case "list":
    knex("contato").select().then(ret => {
    console.log(ret)
    process.exit(0) // finalizar execução do script
    })
break

default: process.exit(0);
  
}