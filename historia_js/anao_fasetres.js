function resposta() {
    var resposta = prompt("1-Ir para casa e encerrar a noite. /n 2-Ir para o bordel e dormir ao lado de uma bela jovem. ");
    var tentativas = 2;

    for (var i=0; i <tentativas; i++) {

        if (resposta == "1") {
            alert("sua jornada chegou ao fim")
            location.href = "pagvencedor.html"
            
        

        } else if (resposta == "2") {
            alert(" oh aventureiro você está muito cansado para deitar-se com uma bela rapariga,tente outro caminho ");
            location.href = "gameover.html"
            
            

        }
          else{
              alert("Resposta inválida");
          }
           
            
    }
}
