const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = express();
app.use(bodyParser.json());
app.use(cors());

///////////////// ROTAS /////////////////

// Listar todas as tarefas
app.get('/gerenciador-tarefas', (req, res) => {
    res.status(501).send({ message: 'Não Implementado!'});
});

// Listar uma tarefa pelo id
app.get('/gerenciador-tarefas/:id', (req, res) => {
    res.send({ message: req.params.id});
});

////////////// END ROTAS ////////////////


app.listen(process.env.PORT, () => {
    console.log(`Servidor ouvindo na porta ${process.env.PORT}`);
});
