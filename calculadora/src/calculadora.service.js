function CalculadoraService(){

    const SOMA = '+';
    const SUBTRACAO = '-';
    const DIVISAO = '/';
    const MULTIPLICACAO = '*';

    function calcular(numero1, numero2, operador){

        let resultado;

        switch (operador){
            case SOMA:
                resultado = numero1 + numero2;
                break;
            case SUBTRACAO:
                resultado = numero1 - numero2;
                break;
            case DIVISAO:
                resultado = numero1 / numero2;
                break;
            case MULTIPLICACAO:
                resultado = numero1 * numero2;
                break;
            default:
                resultado = 0;
        }

        return resultado;
    }

    function concatenarNumero(numeroAtual, numeroConcat){

        if (numeroAtual === '0' || numeroAtual === null){
            numeroAtual = '';
        }

        if (numeroAtual === '.' && numeroAtual === ''){
            return '0.';
        }

        if (numeroConcat === '.' && numeroAtual.indexOf('.') > -1){
            return numeroAtual
        }

        return numeroAtual + numeroConcat;
    }

    return [
        calcular, 
        concatenarNumero,
        SOMA,
        SUBTRACAO, 
        DIVISAO, 
        MULTIPLICACAO
    ];

}

export default CalculadoraService;
