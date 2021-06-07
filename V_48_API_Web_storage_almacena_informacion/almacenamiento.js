//javascript document

function comenzar() {
  var boton = document.getElementById("grabar");

  boton.addEventListener("click", itemNuevo, false);
}

function itemNuevo() {
  var clave = document.getElementById("clave").value;

  var valor = document.getElementById("valor").value;

  sessionStorage.setItem(clave, valor);

  leer_mostrar(clave);
}

function leer_mostrar(clave) {
  var zonadatos = document.getElementById("zonadatos");

  var elvalor = sessionStorage.getItem(clave);

  zonadatos.innerHTML =
    "<div>Clave: " + clave + "--" + "Valor: " + elvalor + "</div>";
}
window.addEventListener("load", comenzar, false);
