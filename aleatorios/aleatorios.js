retornarNumeroAleatorio = function(){
    let aleatorio = Math.random();
    let aleatorioMultiplicado = aleatorio*100;
    let aleatorioEntero = parseInt(aleatorioMultiplicado);
    let numeroAleatorio = aleatorioEntero + 1;
    return numeroAleatorio;
}

generarAleatorios = function(){
    let aleatorios = [];
    let numeroUsuario = parseInt(recuperarTexto('txtNumeroUsuario'));
    let numeroAleatorio;

    if(numeroUsuario <= 20 && numeroUsuario >= 5){
        for(let i=0;i<numeroUsuario;i++){
            console.log(i);
            numeroAleatorio = retornarNumeroAleatorio();
            aleatorios.push(numeroAleatorio);
        }
        mostrarResultados(aleatorios);
    }

}

mostrarResultados = function(arregloNumeros){
    let cmpTabla = document.getElementById('divTabla');
    let contenidoTabla = '<table><tr><th>NUMEROS ALEATORIOS</th></tr>';
    let numeroAleatorio;
    for(let i=0;i<arregloNumeros.length;i++){
        numeroAleatorio = arregloNumeros[i];
        contenidoTabla += '<tr><td>';
        contenidoTabla += numeroAleatorio;
        contenidoTabla += '</td></tr>';
    }
    contenidoTabla += '</table>';
    cmpTabla.innerHTML= contenidoTabla;
}