ejecutarPrueba1 = function(){
    let mensaje = recuperarTexto('txtCadena');
    recorrerCadena(mensaje);
}

recorrerCadena = function(cadena){
    let caracter;
    
    for(let posicion=0;posicion<cadena.length;posicion++){
        caracter = cadena.charAt(posicion);
        console.log('Caracter '+caracter+' posición '+posicion);
    }

    for(let posicion=0;posicion<=cadena.length-1;posicion++){
        caracter = cadena.charAt(posicion);
        console.log('CARACTER '+caracter+' posición '+posicion);
    }
}

ejecutarPrueba2 = function(){
    let mensaje = recuperarTexto('txtCadena');
    let mensajeInverso = recorrerCadenaInversa(mensaje);
    mostrarTexto('lblCadena', mensajeInverso )
    
}

recorrerCadenaInversa = function(cadena){
    
    let caracter;
    let mensajeCompleto = '';

    for(let posicion=cadena.length-1;posicion>=0;posicion--){
        caracter = cadena.charAt(posicion);
        console.log('Caracter '+caracter+' posición '+posicion);
        mensajeCompleto += caracter;
    }
    return mensajeCompleto;
}