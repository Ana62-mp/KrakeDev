calcularValorDescuento = function(monto, porcentajeDescuento){
    let valorDescuento = monto * porcentajeDescuento/100;
    return valorDescuento
}

calcularDescuentoPorVolumen = function(subtotal, cantidad){
    if(cantidad < 3){
        return subtotal;
    }
    if(3 <= cantidad && cantidad <= 5){
        return calcularValorDescuento(subtotal, 3);
    }
    if(6 <= cantidad && cantidad <= 11){
        return calcularValorDescuento(subtotal, 4);
    }
    else{
        return calcularValorDescuento(subtotal, 5);
    }
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

