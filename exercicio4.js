/* 
1) Crie um campo <input type="text"> e aplique os seguintes controles com base nos
eventos abaixo:
• No evento de foco modifique o background do input para amarelo.
• Quando o campo perder o foco, recupere o seu respectivo valor e:
o Caso o conteúdo contido no campo tenha menos de 3 caracteres o mesmo
deve ter seu background alterado para vermelho.
o Caso o conteúdo contido no campo tenha 3 caracteres ou mais o background
deve ser alterado para verde.

*/

function acionaCampo() {
    document.getElementById('campo').style.background = "yellow"
}
    function validaCampo() {
        var valorCampo = document.getElementById('campo').value
         if(valorCampo.length < 3) {
    document.getElementById('campo').style.background = "red"
    } else {
        document.getElementById('campo').style.background = "green"
    }
}