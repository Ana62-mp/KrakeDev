//No se olvide de respirar, mantenga la calma y demuestre lo que sabe

let palabraSecreta;
let intentos = 0;
let coincidencias = 0;
let errores = 0;

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
    }else{
        alert('Ingresa palabra de 5 letras mayúsculas')
    }
}

mostrarLetra = function(letra, posicion){
    if(posicion == 0){
        mostrarTexto("div0", letra)    
    }
    if(posicion == 1){
        mostrarTexto("div1", letra)    
    }
    if(posicion == 2){
        mostrarTexto("div2", letra)    
    }
    if(posicion == 3){
        mostrarTexto("div3", letra)    
    }
    if(posicion == 4){
        mostrarTexto("div4", letra)    
    }
}

validar = function(letra){
    let letrasEncontradas = false;
    for(i=0;i<5;i++){
        let caracterIterado = palabraSecreta.charAt(i);
        if(caracterIterado == letra){
            mostrarLetra(letra, i);
            letrasEncontradas = true;
            coincidencias += 1;
        }
    }
    if(!letrasEncontradas){
        alert('LA LETRA NO ES PARTE DE LA PALABRA');
        errores +=1;
        console.log(errores)
        mostrarAhorcado();
    }

}

ingresarLetra = function(){
    intentos += 1
    letra = recuperarTexto('txtLetra');
    if(esMayuscula(letra)){
        validar(letra);
        if(coincidencias == 5){
            mostrarImagen('ahorcadoImagen','ganador.gif')
        }else if(intentos == 10){
            mostrarImagen('ahorcadoImagen','gameOver.gif')
        }
    }else{
        alert('SOLO SE ACEPTAN MAYÚSCULAS');
    }
}

mostrarAhorcado = function(){
    if(errores == 1){
        mostrarImagen('ahorcadoImagen','Ahorcado_01.png');
    }
    if(errores == 2){
        mostrarImagen('ahorcadoImagen','Ahorcado_02.png');
    }
    if(errores == 3){
        mostrarImagen('ahorcadoImagen','Ahorcado_03.png');
    }
    if(errores == 4){
        mostrarImagen('ahorcadoImagen','Ahorcado_04.png');
    }
    if(errores == 5){
        mostrarImagen('ahorcadoImagen','Ahorcado_05.png');
    }
    if(errores == 6){
        mostrarImagen('ahorcadoImagen','Ahorcado_06.png');
    }
    if(errores == 7){
        mostrarImagen('ahorcadoImagen','Ahorcado_07.png');
    }
    if(errores == 8){
        mostrarImagen('ahorcadoImagen','Ahorcado_08.png');
    }
    if(errores == 9){
        mostrarImagen('ahorcadoImagen','Ahorcado_09.png');
    }
}

