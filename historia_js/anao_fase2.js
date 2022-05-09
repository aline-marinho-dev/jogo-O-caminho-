function resposta() {
    var resposta = prompt("1-aceitar 2-aceitar ");
    var tentativas = 2;

    for (var i=0; i <tentativas; i++) {

        if (resposta == "1") {
            alert("não adianta se arrepender aproiveite a brisa do cachimbo mágico")
            location.href = "/historia_personagens_html/anao_final3.html"
            
            
        

        } else if (resposta == "2") {
            alert(" sua historia infelizmente acaba aqui ");
            location.href = "/gameover.html"
            
            

        }
          else{
              alert("Resposta inválida");
          }
           
            
    }
}
