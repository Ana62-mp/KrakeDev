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
    mostrarNotas();
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

generarTabla = function(){
    let contenidoTabla = '';
    let cmpTabla = document.getElementById('divTabla');
    contenidoTabla += '<table><tr><td>UNO</td></tr></table>'+
    '<table><tr><td>DOS</td></tr></table>';
    cmpTabla.innerHTML=contenidoTabla;
}

mostrarNotas = function(){
    let cmpTabla = document.getElementById('divTabla');
    let contenidoTabla = '<table><tr><th>NOTA</th></tr>';
    let miNota;
    for(let i=0;i<notas.length;i++){
        miNota = notas[i];
        contenidoTabla += '<tr><td>';
        contenidoTabla += miNota;
        contenidoTabla += '</td></tr>';
    }
    contenidoTabla += '</table>'
    cmpTabla.innerHTML= contenidoTabla;
}