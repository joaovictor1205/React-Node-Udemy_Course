import React from 'react';
import ReactDOM from 'react-dom';
import ListarMoedas from './listarMoedas';

describe('Teste do componente ListarMoedas', () => {

    it('Renderizar componente', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ListarMoedas />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});