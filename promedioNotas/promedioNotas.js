calcularPromedioNotas = function(){
    let cmpN1 = recuperarFlotante('nota1');
    let cmpN2 = recuperarFlotante('nota2');
    let cmpN3 = recuperarFlotante('nota3');

    let promedio = calcularPromedio(cmpN1,cmpN2,cmpN3).toFixed(2);

    cambiarTexto('lblPromedio', promedio);

    if(0 < promedio && promedio < 5){
        cambiarImagen('cmpImg','reprobar.gif' );
        cambiarTexto('cmpMensaje', 'REPROBADO')
    }
    else if(5 <= promedio && promedio <= 8){
        cambiarImagen('cmpImg','bien.gif' );
        cambiarTexto('cmpMensaje', 'BUEN TRABAJO')
    }
    else if(8 < promedio && promedio <= 10){
        cambiarImagen('cmpImg','exce.gif' );
        cambiarTexto('cmpMensaje', 'EXCELENTE')
    }
    else{
        cambiarImagen('cmpImg', 'mal.gif');
        cambiarTexto('cmpMensaje', 'DATOS INCORRECTOS')
    }

}