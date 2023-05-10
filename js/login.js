"use strict";

const usuario1 = {
    nomeUsuario : "rita-lee",
    senhaUsuario : "00000"
}

const usuario2 = {
    nomeUsuario : "ptt01",
    senhaUsuario : "12345"
}

console.log(usuario1.nomeUsuario)
console.log(usuario2.nomeUsuario)
usuario2.nomeUsuario = "Juquinha";

let listaDeUsuarios =  [];
listaDeUsuarios.push(usuario1)
listaDeUsuarios.push(usuario2)

addEventListener("click", (evento)=>{

    let userInput = document.querySelector("#idUser");
    let passInput = document.querySelector("#idPass");
    
    //console.log(evento.target);
    if(evento.target.id == "btnSubmit"){
        if(userInput.value == "rm551022" && passInput.value == "12345"){

            console.log("USUARIO VALIDADO");
        }else{
            console.log("USUARIO OU SENHA INCORRETA");
        }


    }

});