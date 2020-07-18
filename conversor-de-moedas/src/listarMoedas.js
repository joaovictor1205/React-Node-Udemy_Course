import React from 'react';

function ListarMoedas() {

    const MOEDAS = [
        {
            "simbolo": "AUD",
            "nomeFormatado": "Dólar australiano",
            "tipoMoeda": "B"
        },
        {
            "simbolo": "CAD",
            "nomeFormatado": "Dólar canadense",
            "tipoMoeda": "A"
        },
        {
            "simbolo": "CHF",
            "nomeFormatado": "Franco suíço",
            "tipoMoeda": "A"
        },
        {
            "simbolo": "DKK",
            "nomeFormatado": "Coroa dinamarquesa",
            "tipoMoeda": "A"
        },
        {
            "simbolo": "EUR",
            "nomeFormatado": "Euro",
            "tipoMoeda": "B"
        },
        {
            "simbolo": "GBP",
            "nomeFormatado": "Libra Esterlina",
            "tipoMoeda": "B"
        },
        {
            "simbolo": "JPY",
            "nomeFormatado": "Iene",
            "tipoMoeda": "A"
        },
        {
            "simbolo": "NOK",
            "nomeFormatado": "Coroa norueguesa",
            "tipoMoeda": "A"
        },
        {
            "simbolo": "SEK",
            "nomeFormatado": "Coroa sueca",
            "tipoMoeda": "A"
        },
        {
            "simbolo": "USD",
            "nomeFormatado": "Dólar dos Estados Unidos",
            "tipoMoeda": "A"
        }
    ];

    function compare(moeda1, moeda2) {
        if (moeda1.nomeFormatado < moeda2.nomeFormatado){
            return -1;
        } else if (moeda1.nomeFormatado > moeda2.nomeFormatado) {
            return 1;
        }
        return 0;
    }

    return MOEDAS.sort(compare).map( moeda =>   
        <option value={moeda.simbolo} key={moeda.simbolo}>
            {moeda.nomeFormatado}
        </option>
    );

}

export default ListarMoedas;