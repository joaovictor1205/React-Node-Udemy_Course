const express = require('express');
const router = express.Router();
const { listarUmaTarefa } = require('../contollers/gerenciadorTarefas');

// Listar todas as tarefas
router.get('/', (req, res) => {
    res.status(501).send({ message: 'Lista tarefas' });
});

// Listar uma tarefa pelo id
router.get('/:id', listarUmaTarefa);

// Criar tarefa
router.post('/', (req, res) => {
    res.send({ message: 'Criar tarefa' });
});

// Atualizar uma tarefa pelo id
router.put('/:id', (req, res) => {
    res.send({ message: `Atualizar tarefa ${req.params.id}` });
});

// Deletar uma tarefa pelo id 
router.delete('/:id', (req, res) => {
    res.send({ message: `Deletar tarefa ${req.params.id}` });
});

//Concluir uma tarefa pelo id
router.put('/:id/concluir', (req, res) => {
    res.send({ message: `Concluir a tarefa ${req.params.id}` });
});

module.exports = router;
