//Javascript document


function ejecuta(){

    for(var i=0;i<2;i++){

    var z=document.getElementsByClassName("importante")[i].onclick=saludo;

    }

    //document.getElementsByTagName("p")[2].onclick=saludo;

    //document.getElementById("importante").onclick=saludo;

    /*for(var i=0;i<3;i++){

    document.getElementsByTagName("p")[i].onclick=saludo;

    }*/
}

function saludo(){

    alert("que hay de nuevo");

}

window.onload=ejecuta;
