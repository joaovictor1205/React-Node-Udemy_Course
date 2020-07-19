import React from 'react';
import './gerenciadorTarefas.css';
import { useRoutes } from 'hookrouter';

const routes = {
  '/': () => <ListarTarefas />,
  '/cadastrar': () => <CadastrarTarefa />,
  '/atualizar/:id': ({id}) => <AtualizarTarefa id={id} />,
}

function GerenciadorTarefas() {
  return useRoutes(routes);
}

export default GerenciadorTarefas;
