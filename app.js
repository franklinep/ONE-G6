// --------------------------------------------------------------------------->
// Variables iniciales 
const texto_ingresado = document.querySelector(".inputText");
const presentacion = document.querySelector(".presentacion");
const texto_salida = document.querySelector(".outText");
const copiar = document.querySelector(".div-copiar");
copiar.style.display = "none";

let m = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],    
    ["o", "ober"],
    ["u", "ufat"]
]
const n = m.length;

// ---------------------------Resize Auto Text inputText--------------------------------->
texto_ingresado.addEventListener(("input"), function(){
    texto_ingresado.style.height = `${texto_ingresado.scrollHeight}px`;
});

// --------------------------------------------------------------------------->
function fencriptar(){
    // Ocultamos la imagen si esta mostrado
    presentacion.style.display = "none";
    // Encriptamos el texto ingresado
    let texto_encriptado = encriptar(texto_ingresado.value);
    // Mostramos la salida
    texto_salida.style.display = "flex";
    texto_salida.value = texto_encriptado;
    // Ajustamos el tamaño del textarea
    texto_salida.style.height = `${texto_salida.scrollHeight}px`;
    // Limpiamos inputText y mostramos boton
    texto_ingresado.value = "";
    copiar.style.display = "flex";
}

function encriptar(texto_encriptado){
    // Encontramos las coincidencias y reemplazamos
    for(let i=0; i < n; i++){
        if(texto_encriptado.includes(m[i][0])) {
            texto_encriptado = texto_encriptado.replaceAll(m[i][0], m[i][1]);
        }
    }
    
    return texto_encriptado;
}
// --------------------------------------------------------------------------->
function fdesencriptar(){
    // Ocultamos la imagen si esta mostrado
    presentacion.style.display = "none";
    // Desencriptamos el texto ingresado
    let texto_desencriptado = desencriptar(texto_ingresado.value);
    // Mostramos la salida
    texto_salida.style.display = "flex";
    texto_salida.value = texto_desencriptado;
    // Ajustamos el tamaño del textarea
    console.log(texto_salida.scrollHeight);
    texto_salida.style.height = `${texto_salida.scrollHeight}px`;
    // Limpiamos inputText y mostramos boton
    texto_ingresado.value = "";
    copiar.style.display = "flex";
}

function desencriptar(texto_desencriptado){
    for(let i=0; i<n; i++){
        if(texto_desencriptado.includes(m[i][1])){
            texto_desencriptado = texto_desencriptado.replaceAll(m[i][1], m[i][0]);
        }
    }
    return texto_desencriptado;
}
// --------------------------------------------------------------------------->
function fcopiar(){
    texto_salida.select();
    document.execCommand("copy");
}



