"use strict";

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