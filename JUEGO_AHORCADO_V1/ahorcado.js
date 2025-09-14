//No se olvide de respirar, mantenga la calma y demuestre lo que sabe

let palabraSecreta;
let letrasEncontradas;
let intentos;
let coincidencias;
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
        mostrarTexto('txtError', '')
    }else{
        mostrarTexto('txtError', 'Ingresa palabra de 5 letras mayúsculas')
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
    for(i=0;i<5;i++){
        let caracterIterado = palabraSecreta.charAt(i);
        if(caracterIterado == letra){
            mostrarLetra(letra, i);
            letrasEncontradas += 1;
            coincidencias += 1;
        }else{
            alert('LA LETRA NO ES PARTE DE LA PALABRA');
            errores +=1;
        }
    }

}

ingresarLetra = function(){
    intentos += 1
    letra = recuperarTexto('txtLetra');
    if(esMayuscula(letra)){
        validar(letra);
        if(coincidencias == 5){
            alert('HA GANADO');
        }else if(coincidencias == 10){
            alert('HA PERDIDO');
        }
    }else{
        alert('SOLO SE ACEPTAN MAYÚSCULAS');
    }
}