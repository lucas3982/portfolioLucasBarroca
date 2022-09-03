//funcion aplica estilo al menu a la opcion seleccionada

function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";


    //desaparece el menu cuando se selecciona

    var x = document.getElementById("nav");
    x.className = "";


}




//funcion menu responsive

function responsiveMenu() {
    var x = document.getElementById("nav");
    if(x.className ==="") {
        x.className = "responsive";
    }else {
        x.className = "";
    }
}

