function resposta() {
    var resposta = prompt("1-esquerda 2-direita ");
    var tentativas = 1;

    for (var i=0; i <tentativas; i++) {

        if (resposta == "1") {
            alert("siga seu caminho ");
            location.href = "../historia_personagens_html/elfo_fase1.html"
            
        

        } else if (resposta == "2") {
            alert("ah sinto muito mas você não ira continuar a jornada , voltar ao inicio ");
           location.href ="../gameover.html"
        }
          else{
              alert("Resposta inválida");
          }
           
            
    }
}

function voltar() {
    location.href ="index.html"
}

