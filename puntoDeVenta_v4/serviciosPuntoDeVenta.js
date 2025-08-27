calcularValorDescuento = function(monto, porcentajeDescuento){
    let valorDescuento = monto * porcentajeDescuento/100;
    return valorDescuento
}

calcularIva = function(monto){
    let valorIVA = (monto * 12)/100;
    return valorIVA;
}

calcularSubtotal = function(precio, cantidad){
    let totalPagar = precio * cantidad;
    return totalPagar;
}

calcularTotal = function(subtotal, descuento, iva){
    let valorTotal = subtotal - descuento + iva;
    return valorTotal;
}

