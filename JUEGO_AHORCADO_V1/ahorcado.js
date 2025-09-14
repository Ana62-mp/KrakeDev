//No se olvide de respirar, mantenga la calma y demuestre lo que sabe

let palabraSecreta;

esMayuscula = function(caracter){
    let esMayus = true;
    let codigoCaracter = caracter.charCodeAt(0);
    if(codigoCaracter < 65 || codigoCaracter > 90){
        esMayus = false;
    }
    return esMayus;
}

guardarPalabra = function(){
    let palabra = recuperarTexto('txtSecreta');
    let caracterIterado;
    let esMayus = false;

    for(let i=0;i<5;i++){
            caracterIterado = palabra.charAt(i);
            if(esMayuscula(caracterIterado)){
                esMayus = true
            }
        }

    if(palabra.length == 5 && esMayus){
        palabraSecreta = palabra;
        console.log(palabraSecreta);
        mostrarTexto('txtError', '')
    }else{
        mostrarTexto('txtError', 'Ingresa palabra de 5 letras mayúsculas')
    }
}

