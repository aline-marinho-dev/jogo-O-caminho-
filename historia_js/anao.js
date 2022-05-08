function resposta() {
    var resposta = prompt("1-esquerda <br> 2-direita ");
    var tentativas = 1;

    for (var i=0; i <tentativas; i++) {

        if (resposta == "1") {
            alert("siga seu caminho ")
            window.location.href = "./anao1.html"
        

        } else if (resposta == "2") {
            alert("bora encher o caneco ,é hoje que você só chega amanhã");

        }
           
            
    }
}

/*function validaçãoDeResposta() {
    var reposta = [1,2] ;
    var nrtentativas = 3 ; */

