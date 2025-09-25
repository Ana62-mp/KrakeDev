esMayuscula = function(caracter){
    let codigoCaracter = caracter.charCodeAt(0);
    let letraMayuscula;
    if (64 < codigoCaracter && codigoCaracter < 91) {
        letraMayuscula = true
    }
    else{
        letraMayuscula = false
    }

    return letraMayuscula;
}

esDigito = function(caracter){
    let codigoCaracter = caracter.charCodeAt(0);
    let digito;
    if (47 < codigoCaracter && codigoCaracter < 58) {
        digito = true
    }
    else{
        digito = false
    }
    
    return digito;
}

esCaracterEspecial = function(caracter){
    let codigoCaracter = caracter.charCodeAt(0);
    let caracterEspecial;
    if (codigoCaracter == 45 || codigoCaracter == 95 || codigoCaracter == 42) {
        caracterEspecial = true
    }
    else{
        caracterEspecial = false
    }
    
    return caracterEspecial;
}