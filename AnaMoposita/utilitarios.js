
mostrarImagen=function(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src =  rutaImagen;
}
mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarTextoDiv = function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.textContent;
    return valorIngresado;
}

recuperarInt = function(idComponente){
   let valorCaja= recuperarTexto(idComponente);
   let valorEntero = parseInt(valorCaja);
   return valorEntero;
}

recuperarIntDiv = function(idComponente){
   let valorCaja= recuperarTextoDiv(idComponente);
   let valorEntero = parseInt(valorCaja);
   return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
 }

recuperarFloatDiv = function(idComponente){
    let valorCaja= recuperarTextoDiv(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
 }

mostrarComponente = function(idComponente){
    document.getElementById(idComponente).style.display = "block";
}

ocultarComponente = function(idComponente){
    document.getElementById(idComponente).style.display = "none";
}

deshabilitarComponente = function(idComponente){
    document.getElementById(idComponente).disabled = true;
}

habilitarComponente = function(idComponente){
    document.getElementById(idComponente).disabled = false;
}


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