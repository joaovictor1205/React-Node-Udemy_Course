import React from 'react';
import './gerenciadorTarefas.css';
import { useRoutes } from 'hookrouter';
import ListarTarefas from './listarTarefas/listarTarefas';
import AtualizarTarefas from './atualizarTarefas/atualizarTarefas';
import CadastrarTarefas from './cadastrarTarefas/cadastrarTarefas';

const routes = {
  '/': () => <ListarTarefas />,
  '/cadastrar': () => <CadastrarTarefas />,
  '/atualizar/:id': ({id}) => <AtualizarTarefas id={id} />,
}

function GerenciadorTarefas() {
  return useRoutes(routes);
}

export default GerenciadorTarefas;
