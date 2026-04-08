function validar() {
    const idade = document.getElementById("idade").value;
    const nivel = document.getElementById("nivel").value;
    const mensagem = document.getElementById("mensagem");
   
    if (idade >= 16 && nivel > 5) {
        mensagem.innerText = "Inscrição aceita. Categoria PRO!"
        mensagem.style.color = "green";
        mensagem.style.fontSize = "20px";
    }


    else if (idade >= 16 && nivel <= 5) {
        mensagem.innerText = "Inscrição aceita. Categoria INICIANTE!";
        mensagem.style.color = "blue";
  mensagem.style.fontSize = "20px";
    }


    else {
        mensagem.innerText = "Inscrição negada. Idade mínima: 16 anos";
        mensagem.style.color = "red";
          mensagem.style.fontSize = "20px";
    }

}

function validar1() {


    const senha1 = document.getElementById("senha1").value;
    const senha2 = document.getElementById("senha2").value;
    const mensagem2 = document.getElementById ("mensagem2");


    if (senha1.length >= 8) {
        if (senha1 == senha2) {
            mensagem2.innerText = "Senha válida";
            mensagem2.style.color = "green";
              mensagem2.style.fontSize = "20px";
       
        } else {
            mensagem2.innerText = "Senhas diferentes";
            mensagem2.style.color = "red";
              mensagem2.style.fontSize = "20px";
        }
    }else{
            mensagem2.innerText = "Senha inválida";
            mensagem2.style.color = "red";
              mensagem2.style.fontSize = "20px";

        }

}


function validar2 () {
 const idade2 = document.getElementById("idade2").value;
 const estudante = document.getElementById ("estudante").value;
 const mensagem3 = document.getElementById("mensagem3");

 if (idade2 == "sim" || estudante == "sim"){
    mensagem3.innerText = "Desconto aplicado!";
     mensagem3.style.color = "blue";
     mensagem3.style.fontSize = "20px";
 } else {
    mensagem3.innerText = "Sem desconto.";
    mensagem3.style.color = "red";
    mensagem3.style.fontSize = "20px";
 }
}

function validar3 () {

    const nome2 = document.getElementById ("nome2").value;
    const idade3 = document.getElementById ("idade3").value;
    const mensagem4 = document.getElementById ("mensagem4");
   
    if(nome2.length > 0 && idade3 > 0){
        mensagem4.innerText = "Sistema liberado";
        mensagem4.style.color = "green"
          mensagem4.style.fontSize = "20px";
    } else if(nome2.length == 0) {
        mensagem4.innerText = "Campo nome vazio";
        mensagem4.style.color = "red"
          mensagem4.style.fontSize = "20px";4

    } else {
        mensagem4.innerText = "Idade inválida.";
        mensagem4.style.color = "red";
          mensagem4.style.fontSize = "20px";4

    }
}