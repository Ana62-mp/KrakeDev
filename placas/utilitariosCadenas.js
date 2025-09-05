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

esGuion = function(caracter){
    let codigoCaracter = caracter.charCodeAt(0);
    let guion;
    if (codigoCaracter == 45) {
        guion = true
    }
    else{
        guion = false
    }
    
    return guion;
}