function resposta() {
    var resposta = prompt("1-esquerda 2-direita ");
    var tentativas = 2;

    for (var i=0; i <tentativas; i++) {

        if (resposta == "1") {
            alert("siga seu caminho ")
            
        

        } else if (resposta == "2") {
            alert("bora encher o caneco ,é hoje que você só chega amanhã");
            window.location.href = "./anao1.html"

        }
          else{
              alert("Resposta inválida");
          }
           
            
    }
}

/*function validaçãoDeResposta() {
    var reposta = [1,2] ;
    var nrtentativas = 3 ; */

