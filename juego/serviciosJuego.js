
obtenerAleatorio = function(){
    let aleatorio = Math.random();
   
    let numeroMultiplicado = aleatorio*3;
    let  numeroEntero = parseInt(numeroMultiplicado);
    let valorNumero = numeroEntero + 1;

    return valorNumero;
}

generarElemento = function(){
    let numero = obtenerAleatorio();
    let resultado;
    if(numero == 1){
        resultado = 'Piedra';
    }
    if(numero == 2){
        resultado = 'Papel';
    }
    if(numero == 3){
        resultado = 'Tijera';
    }
    return resultado;
}

determinarGanador = function(eleccionJugador1, eleccionJugador2){
    let gana;
    if(eleccionJugador1 == eleccionJugador2){
        gana = 0;
    }
    if(eleccionJugador1 == 'Piedra' && eleccionJugador2 == 'Tijera' || eleccionJugador1 == 'Tijera' && eleccionJugador2 == 'Papel' || eleccionJugador1 == 'Papel' && eleccionJugador2 == 'Piedra'){
        gana = 1;
    }
    if(eleccionJugador2 == 'Piedra' && eleccionJugador1 == 'Tijera' || eleccionJugador2 == 'Tijera' && eleccionJugador1 == 'Papel' || eleccionJugador2 == 'Papel' && eleccionJugador1 == 'Piedra'){
        gana = 2;
    }
    return gana;

}

generarRuta = function(nombre){
    let ruta;

    if(nombre == 'Piedra'){
        ruta = './images/piedra.png';
    }

    if(nombre == 'Papel'){
        ruta = './images/papel.png';
    }
    
    if(nombre == 'Tijera'){
        ruta = './images/tijera.png';
    }
    return ruta;
}

