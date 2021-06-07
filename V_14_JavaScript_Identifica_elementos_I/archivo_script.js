//Javascript document


function ejecuta(){

        //document.querySelector(".importante").onclick=saludo;

        //document.querySelector("#principal p:last-child").onclick=saludo;



        /*for (var i = 0; i < 4; i++) {

            var elementos=document.querySelectorAll("#principal p");

            elementos[i].onclick=saludo;
        }*/

        var elementos=document.querySelectorAll("#principal p, span");

        for (var i = 0; i < elementos.length; i++){

            elementos[i].onclick=saludo;
        }


}

function saludo(){

    alert("que hay de nuevo");

}

window.onload=ejecuta;
