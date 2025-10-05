let personas = [
    {nombre:"Marcos", edad:18},
    {nombre:"Roberto", edad:15},
    {nombre:"Kate", edad:25},
    {nombre:"Diana", edad:12},
    {nombre:"Benja", edad:5}
]

agregarPersona = function(){
    let valorNombre = recuperarTexto('txtNombre');
    let valorEdad = recuperarTexto('txtEdad')
    let errores = false

    if(valorNombre.length < 3){
        mostrarTexto('errorNombre', 'El nombre debe contener al menos\n3 caracteres');
        errores = true;
    }else{
        mostrarTexto('errorNombre', '')
    }

    if(valorEdad <= 0 || valorEdad >= 100){
        mostrarTexto('errorEdad', 'Debe ser un número entre 0 y 100');
        errores = true;
    }else{
        mostrarTexto('errorEdad', '')
    }

    if(errores == false){
        let nuevaPersona = {};
        nuevaPersona.nombre = valorNombre;
        nuevaPersona.edad = valorEdad;
        personas.push(nuevaPersona);
        alert('PERSONA AGREGADA CORRECTAMENTE');
    }

    mostrarTabla();

}

encontrarMayor = function(){
    let personaMayor = personas[0];
    let elementoPersona;
    for(let i=1;i<personas.length; i++){
        elementoPersona = personas[i];
        console.log(elementoPersona.nombre + ' ' + elementoPersona.edad);
        if(elementoPersona.edad > personaMayor.edad){
            personaMayor = elementoPersona;
        }
    }
    return personaMayor;
}

determinarMayor = function(){
    let mayor = encontrarMayor();
    mostrarTexto('personaMayor', 'La persona mayor es: ' + mayor.nombre + ' con '+ mayor.edad + ' año/s de edad');
}

encontrarMenor = function(){
    let personaMenor = personas[0];
    let elementoPersona;
    for(let i=1;i<personas.length; i++){
        elementoPersona = personas[i];
        if(elementoPersona.edad < personaMenor.edad){
            personaMenor = elementoPersona;
        }
    }
    return personaMenor;
}

determinarMenor = function(){
    let menor = encontrarMenor();
    mostrarTexto('personaMenor', 'La persona menor es: ' + menor.nombre + ' con '+ menor.edad + ' año/s de edad');
}

mostrarTabla = function(){
    let cmpTabla = document.getElementById('tablaPersonas');
    let contenidoTabla = '<table><tr>'+
    '<th>NOMBRE</th>'+
    '<th>EDAD</th>'+
    '</tr>';


    let elementoPersona;
    for(let i=0;i<personas.length; i++){
        elementoPersona = personas[i];
        contenidoTabla+= '<tr><td>'+elementoPersona.nombre+'</td>'
        + '<td>'+elementoPersona.edad+'</td>'
        + '</tr>'
    }
    contenidoTabla += '</table>';
    cmpTabla.innerHTML = contenidoTabla;
}