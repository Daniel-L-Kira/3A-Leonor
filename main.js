alert("Ola Usuário, não esqueça de dar chocolate ao seu professsor!");

let nome_usuário ="";
let elemento = document.querySelector("#nome-usuário");


while(nome_usuário ==""){
    nome_usuário=prompt("Qual o seu nome?")}

if(nome_usuário ==null){elemento.textContent = "Anônimo";}
else{elemento.textContent =nome_usuário};