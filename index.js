import express from "express";
import cors from "cors";
import { ler, inserir, excluir } from "./src/aluno.js";

const app = express();
const porta = process.even.PORT || 3001;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API de eventos");
});

app.get("/evento", (req, res) => {
  ler(res);
});

app.get("/evento/:id", (req, res) => {
  const id = req.params.id;
  lerUm(id, res);
});

app.post("/evento", (req, res) => {
  const novoAluno = req.body;
  inserir(novoAluno, res);
});

app.put("/evento/:id", (req, res) => {
  res.send(`ATUALIZANDO TODOS os dados dados do perfil`);
});

app.patch("/evento/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const aluno = req.body;
  atualizar(id, aluno, res);
});

app.delete("/evento/:id", (req, res) => {
  const id = parseInt(req.params.id);
  excluir(id, res);
});

app.listen(porta, () => {
  console.log("Servidor Express rodando");
});
