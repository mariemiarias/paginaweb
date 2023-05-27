// Cambio del color de fondo con imagen realziado por marisol
const $BTN = document.getElementById("btn-colores");
let i = 0;
arrayColores = ["#62372E", "#87CEEB", "#faebd7", "#a52a2a", "#008b8b", "#bdb76b", "#ff8c00", "#8fbc8f", "#daa520", "#f0fff0"];
$BTN.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.style.background = arrayColores[i];
    i++;
    if (i === 10) i = 0;
});

// Botones
let btn_Verde = document.getElementById('Verde');
let btn_Azul = document.getElementById('Azul');
let btn_Rosado = document.getElementById('Rosado');
let btn_Rojo = document.getElementById('Rojo');
let btn_Marron = document.getElementById('Marron');
let btn_Naranja = document.getElementById('Naranja');
let btn_Morado = document.getElementById('Morado');
let btn_Oliva = document.getElementById('Oliva');
let btn_Negro = document.getElementById('Negro');
let btn_Fucsia = document.getElementById('Fucsia');
let btn_Cyan = document.getElementById('Cyan');
let btn_Amarillo = document.getElementById('Amarillo');
let btn_Borrar = document.getElementById('Borrar');

// Textos
let txt_Verde = document.getElementById('LetraVerde');
let txt_Rojo = document.getElementById('LetraRojo');
let txt_Gris = document.getElementById('LetraGris');
let txt_Marron = document.getElementById('LetraMarron');
let txt_Lima = document.getElementById('LetraLima');
let txt_Turquesa = document.getElementById('LetraTurquesa');
let txt_Fucsia = document.getElementById('LetraFucsia');
let txt_Purpura = document.getElementById('LetraPurpura');
let txt_Salmon = document.getElementById('LetraSalmon');
let txt_Soscuro = document.getElementById('LetraSoscuro');
let txt_Rindio = document.getElementById('LetraRindio');
let txt_Lino = document.getElementById('LetraLino');

// Contenedores
let box = document.querySelector('.container3');

// Funciones
function leeTexto() {
    var mensaje = document.getElementById("mensaje").value
    document.getElementById("respuesta").innerHTML = "Esta es tu informacion: " + mensaje;
}

function borrarTexto() {
    document.getElementById("mensaje").value = "";
    document.getElementById("respuesta").innerHTML = "";
    document.getElementById("respuesta").style.color = btn_Negro.value;
}

function changeColorBtn1() {
    if (btn_Verde.value == "green") {
        box.style.background = btn_Verde.value;
        console.log(btn_Verde);
    }
}

function changeColorBtn2() {
    if (btn_Azul.value == "blue") {
        box.style.background = btn_Azul.value
        console.log(btn_Azul)
    }
}

function changeColorBtn3() {
    if (btn_Rosado.value == "pink") {
        box.style.background = btn_Rosado.value
        console.log(btn_Rosado)
    }
}

function changeColorBtn4() {
    if (btn_Rojo.value == "red") {
        box.style.background = btn_Rojo.value
        console.log(btn_Rojo)
    }
}

function changeColorBtn5() {
    if (btn_Borrar.value == "default") {
        box.style.background = "#556677"
        console.log(btn_Borrar)
    }
}

function changeColorBtn6() {
    if (btn_Marron.value == "brown") {
        box.style.background = btn_Marron.value
        console.log(btn_Marron)
    }
}

function changeColorBtn7() {
    if (btn_Naranja.value == "orange") {
        box.style.background = btn_Naranja.value
        console.log(btn_Naranja)
    }
}

function changeColorBtn8() {
    if (btn_Morado.value == "purple") {
        box.style.background = btn_Morado.value
        console.log(btn_Morado)
    }
}

function changeColorBtn9() {
    if (btn_Oliva.value == "olive") {
        box.style.background = btn_Oliva.value
        console.log(btn_Oliva)
    }
}

function changeColorBtn10() {
    if (btn_Negro.value == "black") {
        box.style.background = btn_Negro.value
        console.log(btn_Negro)
    }
}

function changeColorBtn11() {
    if (btn_Fucsia.value == "fuchsia") {
        box.style.background = btn_Fucsia.value
        console.log(btn_Fucsia)
    }
}

function changeColorBtn12() {
    if (btn_Cyan.value == "cyan") {
        box.style.background = btn_Cyan.value
        console.log(btn_Cyan)
    }
}

function changeColorBtn13() {
    if (btn_Amarillo.value == "yellow") {
        box.style.background = btn_Amarillo.value
        console.log(btn_Amarillo)
    }
}

function changeColorTxt1() {
    if (txt_Verde.value == "green") {
        document.getElementById("respuesta").style.color = txt_Verde.value;
    }
}

function changeColorTxt2() {
    if (txt_Rojo.value == "red") {
        document.getElementById("respuesta").style.color = txt_Rojo.value;
    }
}

function changeColorTxt3() {
    if (txt_Gris.value == "Gray") {
        document.getElementById("respuesta").style.color = txt_Gris.value;
    }
}

function changeColorTxt4() {
    if (txt_Marron.value == "Maroon") {
        document.getElementById("respuesta").style.color = txt_Marron.value;
    }
}

function changeColorTxt5() {
    if (txt_Lima.value == "Lime") {
        document.getElementById("respuesta").style.color = txt_Lima.value;
    }
}

function changeColorTxt6() {
    if (txt_Turquesa.value == "Teal") {
        document.getElementById("respuesta").style.color = txt_Turquesa.value;
    }
}

function changeColorTxt7() {
    if (txt_Fucsia.value == "Fuchsia") {
        document.getElementById("respuesta").style.color = txt_Fucsia.value;
    }
}

function changeColorTxt8() {
    if (txt_Purpura.value == "Purple") {
        document.getElementById("respuesta").style.color = txt_Purpura.value;
    }
}

function changeColorTxt9() {
    if (txt_Salmon.value == "Salmon") {
        document.getElementById("respuesta").style.color = txt_Salmon.value;
    }
}

function changeColorTxt10() {
    if (txt_Soscuro.value == "DarkSalmon") {
        document.getElementById("respuesta").style.color = txt_Soscuro.value;
    }
}

function changeColorTxt11() {
    if (txt_Rindio.value == "IndianRed") {
        document.getElementById("respuesta").style.color = txt_Rindio.value;
    }
}

function changeColorTxt12() {
    if (txt_Lino.value == "Linen") {
        document.getElementById("respuesta").style.color = txt_Lino.value;
    }
}