function resposta() {
    var resposta = prompt("1-esquerda 2-direita ");
    var tentativas = 2;

    for (var i=0; i <tentativas; i++) {

        if (resposta == "1") {
            alert(" é hora de descansar a beleza porém é igual o ditado: um olho dormindo e outro peixe!")
            location.href = "../historia_personagens_html/elfo_fase3.html"
            
            
        

        } else if (resposta == "2") {
            alert(" sua historia infelizmente acaba aqui ");
            location.href = "../gameover.html"
            
            

        }
          else{
              alert("Resposta inválida");
          }
           
            
    }
}

function voltar() {
    location.href ="index.html"
}

