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