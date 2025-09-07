let puntosUsuario = 0;
let puntosComputador = 0;

jugar = function(seleccionado){
    opcionSelec = generarElemento();
    let ruta =generarRuta(opcionSelec);
    mostrarImagen('imgObjeto', ruta);
    resultado = determinarGanador(opcionSelec, seleccionado);

    if(resultado == 0){
        mostrarTexto('lblGanador', 'EMPATE');
    }
    if(resultado == 1){
        mostrarTexto('lblGanador', 'PERDISTE LA PARTIDA');
        puntosComputador += 1;
        mostrarTexto('lblPuntosCompu', puntosComputador)
    }
    if(resultado == 2){
        mostrarTexto('lblGanador', 'GANASTE LA PARTIDA');
        puntosUsuario += 1;
        mostrarTexto('lblPuntosUsuario', puntosUsuario)
    }

    if(puntosUsuario == 5){
        mostrarTexto('txtGanador', 'HAS GANADO\nEL JUEGO');
    }
    if(puntosComputador == 5){
        mostrarTexto('txtGanador', 'EL COMPUTADOR\nTE HA VENCIDO');
    }
}

limpiar = function () {
    puntosComputador = 0;
    puntosUsuario = 0;
    mostrarTexto('lblGanador', '...');
    mostrarTexto('lblPuntosUsuario', puntosUsuario);
    mostrarTexto('lblPuntosCompu', puntosComputador);
    mostrarTexto('txtGanador', '');
    mostrarImagen('imgObjeto', '');


}