// ============================
//  Dependências
// ============================
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import usuarioRoutes from "./src/routes/usuario.routes.js";
import livrosRoutes from "./src/routes/livros.routes.js";
import avaliacaoRoutes from "./src/routes/avaliacao.routes.js";
import desafioExtra from "./src/routes/avaliacao.routes.js"

// ============================
//  Configuração do servidor
// ============================
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("🚀 API rodando com sucesso!");
});

// Rotas
app.use("/usuario", usuarioRoutes);
app.use("/livros", livrosRoutes);
app.use("/avaliacoes", avaliacaoRoutes);


// ============================
//  Inicia o servidor
// ============================
const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Servidor rodando na porta ${PORT}`));
