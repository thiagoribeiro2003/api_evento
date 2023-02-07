import conexao from "./banco.js";

function ler(res) {
  const sql = "SELECT * FROM evento";

  conexao.query(sql, (erro, resultados) => {
    if (resultados.length == 0) {
      res.status(204).end();
      return;
    }
    if (erro) {
      res.status(400).json(erro.code);
    } else {
      res.status(200).json(resultados);
    }
  });
}

function inserir(evento, res) {
  const sql = "INSERT INTO evento SET ?";

  conexao.query(sql, evento, (erro) => {
    if (erro) {
      res.status(400).json(erro.code);
    } else {
      res.status(201).json({ status: "evento inserido" });
    }
  });
}

// function lerUm(email, res) {
//   const sql = "SELECT * FROM evento WHERE ";
// }

// function atualizar(email, evento, res) {
//   const sql = "UPDATE evento SET ? WHERE ";
// }

function excluir(id, res) {
  const sql = "DELETE FROM perfil WHERE id = ?";

  conexao.query(sql, id, (erro, resultados) => {
    if (erro) {
      res.status(400).json(erro.code);
    } else {
      res.status(400).json({ status: "evento excluído", id });
    }
  });
}
export { ler, inserir, excluir };
