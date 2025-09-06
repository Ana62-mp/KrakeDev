validarPlacas = function(){
    let cmpPlaca = recuperarTexto('txtPlaca');
    let erroresEstructura = validarEstructura(cmpPlaca);
    let provinciaPlaca = obtenerProvincia(cmpPlaca);
    let tipoDeVehiculo = obtenerTipoVehiculo(cmpPlaca);

    if(erroresEstructura == null){
        mostrarTexto('lblResultado', 'ESTRUCTURA VALIDA');
        mostrarTexto('lblError1', '');

        if(provinciaPlaca != null){
            mostrarTexto('lblProvincia', provinciaPlaca);
        }else{
            mostrarTexto('lblProvincia', 'PROVINCIA INCORRECTA');
        }

        if(tipoDeVehiculo!= null){
            mostrarTexto('lblVehiculo', tipoDeVehiculo);
        }else{
            mostrarTexto('lblVehiculo', 'VEHICULO INCORRECTA');
        }
        
        let diaPicoYPlaca = obtenerDiaPicoYPlaca(cmpPlaca);
        mostrarTexto('lblPicoPlaca', diaPicoYPlaca + '\n\nRecuerda que Sábados, Domingos y Feriados\nla circulación es libre.');

        
    }else{
        mostrarTexto('lblResultado', 'ESTRUCTURA INCORRECTA');
        mostrarTexto('lblError1', erroresEstructura);
        mostrarTexto('lblProvincia', 'ESCRIBE CORRECTAMENTE LA\nESTRUCTURA PARA CONOCER LA PROVINCIA');
        mostrarTexto('lblVehiculo', 'ESCRIBE CORRECTAMENTE LA\nESTRUCTURA PARA CONOCER EL VEHICULO');
        mostrarTexto('lblPicoPlaca', 'ESCRIBE CORRECTAMENTE LA\nESTRUCTURA PARA CONOCER EL DIA');
    }
}

limpiar = function () {
    mostrarTextoEnCaja('txtPlaca', '');

    mostrarTexto('lblResultado', '...');
    mostrarTexto('lblError1', '');
    mostrarTexto('lblProvincia', '...');
    mostrarTexto('lblVehiculo', '...');
    mostrarTexto('lblPicoPlaca', '...');

}