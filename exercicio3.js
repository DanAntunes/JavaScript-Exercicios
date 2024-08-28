  /* 1) Crie uma aplicação para efetuar cálculo aritméticos de soma e subtração.
        Considere os seguintes critérios:
        1) Ao executar o script a aplicação deve solicitar a entrada de um número, seguido de
        uma operação de soma ou subtração e posteriormente seguido de um segundo
        número.
        2) A operação deve ser inserida pelo usuário de forma textual, ou seja, quando o sistema
        solicita a operação o usuário deve informar o texto ‘soma’ ou ‘subtração’ (sem as
        aspas).
        3) Na sequência o sistema deve enviar os parâmetros para uma função efetuar o devido
        cálculo. Exemplo: calculo(num1, num2, operacao).
        4) A função deve executar o cálculo com base na operação informada pelo usuário e na
        sequência deve retornar o valor encontrado.
        5) Ao término o sistema deve fornecer a seguinte saída para o usuário:
        “O resultado é: <resultado>.”
        *A informação em vermelho é uma variável e deve ser substituída pelo seu respectivo valor
        calculada dentro da aplicação. */
        
        var num1 = prompt('Digite um número')
        var operacao = prompt('Digite a operação')
        var num2 = prompt('Digite outro número')

        function calcular(num1, num2, operacao) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        var resultado = 0;

        if(operacao == 'soma'){
            resultado = num1 + num2;
        }

        if(operacao == 'subtracao'){
            resultado = num1 - num2;
        }

        return resultado;
    }

    var resultado = calcular(num1, num2, operacao);
    document.write('O resultado é: ' + resultado);

