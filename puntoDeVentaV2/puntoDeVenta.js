calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let cantidad;
    let precioProducto;

    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    nombreProducto = recuperarTexto('txtProducto');
    cantidad = recuperarInt('txtCantidad')
    precioProducto = recuperarFloat('txtPrecio')

    if(campoObl(nombreProducto, cantidad, precioProducto)){
        if(esProductoValido(nombreProducto) & esCantidadValida(cantidad) & esPrecioValido(precioProducto)){
            mostrarTexto('lblNombre', nombreProducto);
            valorSubtotal = calcularSubtotal(precioProducto, cantidad);
            mostrarTexto('lblSubtotal', valorSubtotal.toFixed(2));
            valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
            mostrarTexto('lblDescuento', valorDescuento);
            valorIVA = calcularIva(valorSubtotal - valorDescuento);
            mostrarTexto('lblValorIVA', valorIVA.toFixed(3));
            valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
            mostrarTexto('lblTotal', valorTotal.toFixed(2));
        }else{
        mostrarTexto('lblSubtotal', '0.0');
        mostrarTexto('lblDescuento', '0.0');
        mostrarTexto('lblValorIVA', '0.0');
        mostrarTexto('lblTotal', '0.0');
        }
    }else{
        mostrarTexto('lblSubtotal', '0.0');
        mostrarTexto('lblDescuento', '0.0');
        mostrarTexto('lblValorIVA', '0.0');
        mostrarTexto('lblTotal', '0.0');
    }

}

esProductoValido = function(nombreP){
    nvalido = true;
    if(nombreP.length > 10){
        mostrarTexto('lblError1', 'NO MÁS DE 10 CARACTERES');
        nvalido = false;
    }else{
        mostrarTexto('lblError1', '');
    }
    return nvalido;
}

esCantidadValida = function(cantidadp){
    cvalida = true;
    if(cantidadp <= 0 || cantidadp > 100){
        mostrarTexto('lblError2', 'NO MENOR 1 O MÁS DE 100');
        cvalida = false;
    }else{
        mostrarTexto('lblError2', '');
    }
    return cvalida;
}

esPrecioValido = function(preciop){
    pvalida = true;
    if(preciop <= 0 || preciop > 50){
        mostrarTexto('lblError3', 'NO MENOR 0 O MÁS DE 50');
        pvalida = false;
    }else{
        mostrarTexto('lblError3', '');
    }
    return pvalida;
}

campoObl = function(nombreP, cantidadP, precioP){
    campoValido = true;
    if (nombreP == ''){
        mostrarTexto('lblError1', '*CAMPO OBLIGATORIO');
        campoValido = false;
    }else{
        mostrarTexto('lblError1','');
    }
    if(isNaN(cantidadP)){
        mostrarTexto('lblError2', '*CAMPO OBLIGATORIO');
        campoValido = false;
    }else{
        mostrarTexto('lblError2','');
    }
    if(isNaN(precioP)){
        mostrarTexto('lblError3', '*CAMPO OBLIGATORIO');
        campoValido = false;
    }else{
        mostrarTexto('lblError3','');
    }
    return campoValido;
}




limpiar = function () {
    mostrarTextoEnCaja('txtProducto', '');
    mostrarTextoEnCaja('txtCantidad', '0');
    mostrarTextoEnCaja('txtPrecio', '0.0');
    mostrarTextoEnCaja('txtPorcentajeDescuento', '0');

    mostrarTexto('lblSubtotal', '0.0');
    mostrarTexto('lblDescuento', '0.0');
    mostrarTexto('lblValorIVA', '0.0');
    mostrarTexto('lblTotal', '0.0');

}
