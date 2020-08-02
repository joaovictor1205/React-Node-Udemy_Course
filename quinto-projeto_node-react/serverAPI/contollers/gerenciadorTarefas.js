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

function listarTarefas(req, res){
    const pagina = req.query['pag'] || 1;
    const ordem = req.query['ordem'];
    const filtroTarefa = req.query['filtro-tarefa'];
    const itensPorPagina = req.query['itens-por-pagina'] || 3;
    let tarefasRetornar = tarefas.slice(0);

    if (filtroTarefa){
        tarefasRetornar = tarefasRetornar.filter(
            t => t.nome.toLowerCase().indexOf(filtroTarefa.toLowerCase()) === 0
        );
    }

    if(ordem === 'ASC'){
        tarefasRetornar.sort( (t1, t2) => (t1.nome.toLowerCase() > t2.nome.toLowerCase()) ? 1 : -1 );
    } else if(ordem === 'DESC'){
        tarefasRetornar.sort( (t1, t2) => (t1.nome.toLowerCase() < t2.nome.toLowerCase()) ? 1 : -1 );
    }

    res.json({
        totalItens: tarefasRetornar.length,
        tarefas: tarefasRetornar.slice(0).splice((pagina - 1) * itensPorPagina, itensPorPagina),
        pagina: pagina,
    });
}

module.exports = {
    listarUmaTarefa,
    listarTarefas,
}
