calcularPromedioNotas = function(){
    let cmpN1 = recuperarFlotante('nota1');
    let cmpN2 = recuperarFlotante('nota2');
    let cmpN3 = recuperarFlotante('nota3');

    let promedio = calcularPromedio(cmpN1,cmpN2,cmpN3).toFixed(2);

    cambiarTexto('lblPromedio', promedio);

    if(promedio > 7){
        cambiarImagen('cmpImg','bien.gif' );
    }
    else{
        cambiarImagen('cmpImg', 'mal.gif');
    }

}