// Selección de elementos
const btnEncripar = document.querySelector(".btn_encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".contenedor_imagen");
const btnCopiar = document.querySelector(".btn_copiar");
const btnDesencriptar = document.querySelector(".btn_desencriptar");

// Botón Encriptar
btnEncripar.addEventListener("click", e => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if (texto === "") {
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacío.";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else if (texto !== txt) {
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales.";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else if (texto !== texto.toLowerCase()) {
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula.";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else {
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        btnCopiar.style.display = "block"; 
        contenido.style.display = "none"; 
    }
});

// Botón Desencriptar
btnDesencriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if (texto === "") {
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacío.";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else if (texto !== txt) {
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales.";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else if (texto !== texto.toLowerCase()) {
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula.";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else {
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        btnCopiar.style.display = "block"; 
        contenido.style.display = "none";
    }
});

// Botón Copiar
btnCopiar.addEventListener("click", e => {
    e.preventDefault();
    respuesta.select();
    document.execCommand("copy");
});
