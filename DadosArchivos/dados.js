jugar = function(){
    let aleatorio = lanzarDado();
    cambiarTexto('lblNumero', aleatorio);
    if(aleatorio>3){
        let mensaje1 = 'ES MAYOR A 3 - GANASTE'
        cambiarTexto('lblMensaje', mensaje1);
    }
    else{
        let mensaje2 = 'ES MENOR A 3 - PERDISTE'
        cambiarTexto('lblMensaje', mensaje2);
    }
}

lanzarDado = function(){
    let aleatorio = Math.random();
   
    let numeroMultiplicado = aleatorio*6;
    //console.log(numeroMultiplicado);
    
    let  numeroEntero = parseInt(numeroMultiplicado);
    //console.log('---->', numeroEntero);
    
    let valorDado = numeroEntero + 1;
    //console.log('------->', valorDado);

    return valorDado;
    
}