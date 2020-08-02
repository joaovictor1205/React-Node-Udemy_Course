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
    res.status(501).send({ message: 'Lista tarefas' });
});

// Listar uma tarefa pelo id
app.get('/gerenciador-tarefas/:id', (req, res) => {
    res.send({ message: req.params.id });
});

// Criar tarefa
app.post('/gerenciador-tarefas', (req, res) => {
    res.send({ message: 'Criar tarefa' });
});

// Atualizar uma tarefa pelo id
app.put('/gerenciador-tarefas/:id', (req, res) => {
    res.send({ message: `Atualizar tarefa ${req.params.id}` });
});

// Deletar uma tarefa pelo id 
app.delete('/gerenciador-tarefas/:id', (req, res) => {
    res.send({ message: `Deletar tarefa ${req.params.id}` });
});

//Concluir uma tarefa pelo id
app.put('/gerenciador-tarefas/:id/concluir', (req, res) => {
    res.send({ message: `Concluir a tarefa ${req.params.id}` });
});

////////////// END ROTAS ////////////////


app.listen(process.env.PORT, () => {
    console.log(`Servidor ouvindo na porta ${process.env.PORT}`);
});
