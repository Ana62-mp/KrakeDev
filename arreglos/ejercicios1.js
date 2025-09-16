let notas = [];

agregarElementos = function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

probarAgregar = function(){
    let notaRecuperada = recuperarInt('txtNota');
    agregarNota(notaRecuperada);
}

agregarNota = function(nota){
    notas.push(nota);

}

recorrerArreglo = function(){
    let notaR;
    for(let i=0;i<notas.length;i++){
        notaR = notas[i];
        console.log(notaR);
    }
}

calcularPromedio = function(){
    let sumaNotas = 0;
    let promedio;

    for(let i=0;i<notas.length;i++){
        sumaNotas += notas[i];
    }
    promedio = sumaNotas/notas.length;
    return promedio;
}

ejecutarPromedio = function(){
    promedio = calcularPromedio()
    mostrarTexto('txtPromedio', promedio);
}