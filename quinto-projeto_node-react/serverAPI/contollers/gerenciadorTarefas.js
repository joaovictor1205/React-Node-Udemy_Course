const uuid = require('uuid');

// Armazenar tarefas em memória
let tarefas = [
    {
        id: '1',
        nome: 'Tarefa 1',
        concluida: true,
    },
    {
        id: '2',
        nome: 'Tarefa 2',
        concluida: false,
    },
    {
        id: '3',
        nome: 'Tarefa 3',
        concluida: true,
    },
    {
        id: '4',
        nome: 'Tarefa 4',
        concluida: false,
    },
];

function listarUmaTarefa(req, res){
    const id = req.params.id;
    const tarefa = tarefas.filter( tarefa =>
        tarefa.id === id
    );
    if(tarefa.length == 0){
        res.status(404).json({ err: 'Tarefa não encontrada' });
    }
    res.json(tarefa[0]);
}

module.exports = {
    listarUmaTarefa,
}
