function Tarefa(id, nome, concluida){
    this.is = id;
    this.nome = nome;
    this.concluida = concluida;

    return {
        id:id,
        nome:nome,
        concluida:concluida,
    }
}

export default Tarefa;