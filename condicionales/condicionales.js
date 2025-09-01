calcularTasaInteres = function(ingresoAnual){
    ingresoAnual = parseFloat(ingresoAnual);
    let tasaInteres;
    if(ingresoAnual < 300000){
        tasaInteres = 16;
    }
    else if(300000 <= ingresoAnual && ingresoAnual < 500000){
        tasaInteres = 15;
    }
    else if(500000 <= ingresoAnual && ingresoAnual < 1000000){
        tasaInteres = 14;
    }
    else if(1000000 <= ingresoAnual && ingresoAnual < 2000000){
        tasaInteres = 13;
    }
    else if(2000000 <= ingresoAnual){
        tasaInteres = 12;
    }

    return tasaInteres + '%';
}

calcularCapacidadPago = function(edad, ingresos, egresos){
    edad = parseInt(edad);
    ingresos = parseFloat(ingresos);
    egresos = parseFloat(egresos);
    let monto = ingresos - egresos;
    let montoPagar;

    if (edad > 50){
        montoPagar = (monto * 30)/100;        
    }
    else if (edad <= 50) {
        montoPagar = (monto * 40)/100;         
    } 

    return montoPagar;
}

calcularDescuento = function(precio, cantidad){
    precio = parseFloat(precio);
    cantidad = parseInt(cantidad);
    let valorPagar;

    if(cantidad < 3){
        valorPagar = precio;
    }
    else if(3 <= cantidad && cantidad <= 5){
        valorPagar = precio - ((precio * 2)/100);
    }
    else if(6 <= cantidad && cantidad <= 11){
        valorPagar = precio - ((precio * 3)/100);
    }
    else if(12 <= cantidad){
        valorPagar = precio - ((precio * 4)/100);
    }
    
    return valorPagar;
}

determinarColesterolLDL = function(nivelColesterol){
    nivelColesterol = parseFloat(nivelColesterol);
    let mensaje;
    if (nivelColesterol < 100){
        mensaje = "Óptimo";
    } else if (100 < nivelColesterol && nivelColesterol <= 129){
        mensaje = "Casi óptimo";
    } else if (130 <= nivelColesterol && nivelColesterol <= 159){
        mensaje = "Límite alto";
    } else if (160 <= nivelColesterol && nivelColesterol <= 189){
        mensaje = "Alto";
    } else if(190 <= nivelColesterol){
        mensaje = "Muy alto";
    }
    return mensaje;
}

validarClave = function(clave){
    let validez;

    if(8 <= clave.length && clave.length <= 16){
        validez = true;
    }
    else{
        validez = false;
    }
    return validez;
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

esMinuscula = function(caracter){
    let codigoCaracter = caracter.charCodeAt(0);
    let letraMinuscula;
    if (96 < codigoCaracter && codigoCaracter < 123) {
        letraMinuscula = true
    }
    else{
        letraMinuscula = false
    }

    return letraMinuscula;
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

darPermiso = function(notaMatematica, notaFisica, notaGeometria){
    notaMatematica = parseFloat(notaMatematica);
    notaFisica = parseFloat(notaFisica);
    notaGeometria = parseFloat(notaGeometria);
    let permiso;

    if(notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90){
        permiso = true;
    }
    else{
        permiso = false;
    }

    return permiso;
}

otorgarPermiso = function(notaMatematica, notaFisica, notaGeometria){
    notaMatematica = parseFloat(notaMatematica);
    notaFisica = parseFloat(notaFisica);
    notaGeometria = parseFloat(notaGeometria);
    let permiso;

    if(notaMatematica > 90 || notaFisica > 90 && notaGeometria > 80){
        permiso = true;
    }
    else{
        permiso = false;
    }

    return permiso;
}

dejarSalir = function(notaMatematica, notaFisica, notaGeometria){
    notaMatematica = parseFloat(notaMatematica);
    notaFisica = parseFloat(notaFisica);
    notaGeometria = parseFloat(notaGeometria);
    let permiso;

    if(notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90 && notaFisica > notaMatematica){
        permiso = true;
    }
    else{
        permiso = false;
    }

    return permiso;
}

