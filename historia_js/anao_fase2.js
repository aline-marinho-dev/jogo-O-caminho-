function resposta() {
    var resposta = prompt("1-aceitar 2-aceitar ");
    var tentativas = 2;

    for (var i=0; i <tentativas; i++) {

        if (resposta == "1") {
            alert("sua jornada chegou ao fim")
            location.href = "./historia_personagens_html/anao_final1.html"
            
        

        } else if (resposta == "2") {
            alert(" calma sua historia não chegou ao fim ");
            location.href = "./historia_personagens_html/anao_final1.html"
            
            

        }
          else{
              alert("Resposta inválida");
          }
           
            
    }
}
