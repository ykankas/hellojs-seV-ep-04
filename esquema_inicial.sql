/* Código para criação do db*/
CREATE TABLE "contato" (
     `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 
     `nome` varchar,
      `telefone` varchar,
       `datacadastro` timestamp 
       )