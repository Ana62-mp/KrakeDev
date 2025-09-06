validarEstructura = function(placa){
    let errores = '';
    if(placa.length < 7 || placa.length > 8){
        errores += 'La placa debe tener 7 u 8 caracteres.\n';
    }
    
    if(placa.length >= 7){
        
        if(!esMayuscula(placa.charAt(0))){
            errores += 'El primer caracter ser ingresado como letra en mayúscula.\n' ;
        }

        if(!esMayuscula(placa.charAt(1))){
            errores += 'El segundo caracter ser ingresado como letra en mayúscula.\n' ;
        }

        if(!esMayuscula(placa.charAt(2))){
            errores += 'El tercer caracter ser ingresado como letra en mayúscula.\n' ;
        }

        if(!esGuion(placa.charAt(3))){
            errores += 'El cuarto caracter debe ser un guion.\n' ;
        }

        if(!esDigito(placa.charAt(4))){
            errores += 'El quinto caracter debe ser un numero.\n' ;
        }

        if(!esDigito(placa.charAt(5))){
            errores += 'El sexto caracter debe ser un numero.\n' ;
        }

        if(!esDigito(placa.charAt(6))){
            errores += 'El séptimo caracter debe ser un numero.\n' ;
        }

        if(placa.length == 8 && !esDigito(placa.charAt(7))){
            errores += 'El octavo caracter debe ser un numero.\n' ;
        }
    }

    if(errores == ''){
        return null;
    }else{
        return errores;
    }
       
    
}

obtenerProvincia = function(placa){
    let primeraLetra = placa.charAt(0);
    let provincia = '';

    if(primeraLetra == 'A'){
        provincia = 'Azuay';
    }
        
    if(primeraLetra == 'B'){
        provincia = 'Bolívar';
    }
        
    if(primeraLetra == 'U'){
        provincia = 'Cañar';
    }
        
    if(primeraLetra == 'C'){
        provincia = 'Carchi';
    }
        
    if(primeraLetra == 'X'){
        provincia = 'Cotopaxi';
    }
        
    if(primeraLetra == 'H'){
        provincia = 'Chimborazo';
    }
        
    if(primeraLetra == 'O'){
        provincia = 'El Oro';
    }
        
    if(primeraLetra == 'E'){
        provincia = 'Esmeraldas';
    }
        
    if(primeraLetra == 'W'){
        provincia = 'Galápagos';
    }
        
    if(primeraLetra == 'G'){
        provincia = 'Guayas';
    }
        
    if(primeraLetra == 'I'){
        provincia = 'Imbabura';
    }
        
    if(primeraLetra == 'L'){
        provincia = 'Loja';
    }
        
    if(primeraLetra == 'R'){
        provincia = 'Los Ríos';
    }
        
    if(primeraLetra == 'M'){
        provincia = 'Manabí';
    }
        
    if(primeraLetra == 'V'){
        provincia = 'Morona Santiago';
    }
        
    if(primeraLetra == 'N'){
        provincia = 'Napo';
    }
        
    if(primeraLetra == 'S'){
        provincia = 'Pastaza';
    }
        
    if(primeraLetra == 'P'){
        provincia = 'Pichincha';
    }
        
    if(primeraLetra == 'K'){
        provincia = 'Sucumbíos';
    }
        
    if(primeraLetra == 'Q'){
        provincia = 'Orellana';
    }
        
    if(primeraLetra == 'T'){
        provincia = 'Tungurahua';
    }
        
    if(primeraLetra == 'Z'){
        provincia = 'Zamora Chinchipe';
    }
        
    if(primeraLetra == 'Y'){
        provincia = 'Santa Elena';
    }
    
    if(provincia == ''){
        return null;
    }else{
        return provincia;
    }
}

obtenerTipoVehiculo = function(placa){
    let segundaLetra = placa.charAt(1);
    let tipoVehiculo = '';

    if(segundaLetra == 'A' || segundaLetra == 'Z'){
        tipoVehiculo = 'Vehículos comerciales\n(como taxis o autobuses)';
    }
        
    if(segundaLetra == 'E'){
        tipoVehiculo = 'Vehículos gubernamentales';
    }
        
    if(segundaLetra == 'X'){
        tipoVehiculo = 'Vehículos de uso oficial';
    }
        
    if(segundaLetra == 'S'){
        tipoVehiculo = 'Vehículos del gobierno\nprovincial';
    }
        
    if(segundaLetra == 'M'){
        tipoVehiculo = 'vehículos municipales';
    }
        
    if(segundaLetra != 'A' && segundaLetra != 'Z' && segundaLetra != 'E' && segundaLetra != 'X' && segundaLetra != 'S' && segundaLetra != 'M'){
        tipoVehiculo = 'Vehículos particular\n(privado)';
    }
    
    if(tipoVehiculo == ''){
        return null;
    }else{
        return tipoVehiculo;
    }
}

obtenerDiaPicoYPlaca = function(placa){
    let ultimaPosicion = placa.length - 1;
    let ultimoDigito = placa.charAt(ultimaPosicion);
    let diaPicoPlaca;

    if(ultimoDigito == 1 || ultimoDigito == 2){
        diaPicoPlaca = 'Lunes';
    }
    if(ultimoDigito == 3 || ultimoDigito == 4){
        diaPicoPlaca = 'Martes';
    }
    if(ultimoDigito == 5 || ultimoDigito == 6){
        diaPicoPlaca = 'Miércoles';
    }
    if(ultimoDigito == 7 || ultimoDigito == 8){
        diaPicoPlaca = 'Jueves';
    }
    if(ultimoDigito == 9 || ultimoDigito == 0){
        diaPicoPlaca = 'Viernes';
    }
    return diaPicoPlaca;
}