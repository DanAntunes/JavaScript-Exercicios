  /*
        
        1) Crie uma aplicação web contendo um campo para entrada de texto (input text) e dois
        botões (buttons), sendo um botão com a descrição "Adicionar" e outro com a descrição
        "Ordenar", conforme imagem abaixo:
        Após criar os elementos de interação com o usuário acima, crie um Array de nome objetos contendo
        os seguintes valores:
        var objetos = Array('Cadeira', 'Impressora', 'Garfo')
        Os próximos passos são:
        A) Ao clicar no botão "Adicionar" disparar função que irá:
        • Recuperar o valor contido no campo de texto.
        • Verificar se o valor está vazio ou preenchido.
        o Se vazio, exibir alert com a mensagem "Informe um valor válido".
        o Se preenchido:
        ▪ Verificar se o valor informado já existe dentro do Array objetos.
        ▪ Se existir, exibir alert com a mensagem "Objeto já foi adicionado".
        ▪ Se não existir:
        • Incluir o valor preenchido no campo dentro do Array.
        • Efetuar um console.log do Array para debug (checar se está
        funcionado).
        • Limpar o valor contido no campo de entrada de texto.
        B) Ao clicar no botão "Ordenar" disparar função que irá:
        • Ordenar de forma alfabética os valores do Array de objetos.
        • Efetuar um console.log do Array para debug (checar se está funcionado).
        
        */

        //2ª Respota
        var objetos = Array ('Cadeira', 'Impressora', 'Garfo')
       
        function adicionarObjeto() {
            //recupera o valor inserido no campo id objeto
            var objeto = document.getElementById('objeto').value
            //caso possua algum valor preenchido entra no if
            if (objeto != '') {
                //verica se o valor já não foi inserido anteriormente
                //se sim, infroma que valor já existe, se não insere novo valor
            if (objetos.indexOf(objeto) !== -1) {
                    alert("Objeto já foi adicionado")

            } else {

                objetos.push(objeto)
                console.log(objetos)
                //limpar o campo
                document.getElementById('objeto').value = ''

            } 

            } else {
                alert('informe um objeto válido')

            }
        }

        function ordenarObjetos() {
                objetos.sort()
                console.log(objetos)
            }

           