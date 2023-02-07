import mysql from "mysql2";

const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  passowrd: "",
  database: "escola",
});

conexao.connect((erro) => {
  if (erro) {
    console.error(`Erro ao conectaar: ${erro.message}`);
  } else {
    console.log(`Banco de dados conectado em ${conexao.config.host}`);
  }
});

export default conexao;
