//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
esMayuscula = function(caracter){
    codigoCaracter = caracter.charCodeAt(0);
    let esMayus = true;
    if(codigoCaracter < 65 || codigoCaracter > 90){
        esMayus = false;
    }
    return esMayus;
}