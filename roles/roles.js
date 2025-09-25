let esNuevo = false;
let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1752724747",nombre:"Laura",apellido:"Lazo",sueldo:750.0}
]

mostrarEmpleado = function(){
    let cmpTabla = document.getElementById('tablaEmpleados');
    let contenidoTabla = '<table><tr>'+
    '<th>CEDULA</th>'+
    '<th>NOMBRE</th>'+
    '<th>APELLIDO</th>'+
    '<th>SUELDO</th>'+
    '</tr>';


    let elementoEmpleado;
    for(let i=0;i<empleados.length; i++){
        elementoEmpleado = empleados[i];
        contenidoTabla+= '<tr><td>'+elementoEmpleado.cedula+'</td>'
        + '<td>'+elementoEmpleado.nombre+'</td>'
        + '<td>'+elementoEmpleado.apellido+'</td>'
        + '<td>'+elementoEmpleado.sueldo+'</td>'
        + '</tr>'
    }

    contenidoTabla += '</table>';

    cmpTabla.innerHTML = contenidoTabla;
}


mostrarOpcionEmpleado = function(){
    mostrarComponente('divEmpleado')
    ocultarComponente('divRol')
    ocultarComponente('divResumen')
    mostrarEmpleado();
    deshabilitarIngresoDatos();

}

deshabilitarIngresoDatos = function(){
    deshabilitarComponente('txtCedula');
    deshabilitarComponente('txtNombre');
    deshabilitarComponente('txtApellido');
    deshabilitarComponente('txtSueldo');
    deshabilitarComponente('btnGuardar');
}

limpiarErroresGuardar = function(){
    mostrarTexto('lblErrorCedula', '');
    mostrarTexto('lblErrorNombre', '');
    mostrarTexto('lblErrorApellido', '');
    mostrarTexto('lblErrorSueldo', '');
}

mostrarOpcionRol = function(){
    mostrarComponente('divRol')
    ocultarComponente('divEmpleado')
    ocultarComponente('divResumen')
}
mostrarOpcionResumen = function(){
    mostrarComponente('divResumen')
    ocultarComponente('divRol')
    ocultarComponente('divEmpleado')
}


ejecutarNuevo = function(){
    esNuevo = true;
    habilitarComponente('txtCedula');
    habilitarComponente('txtNombre');
    habilitarComponente('txtApellido');
    habilitarComponente('txtSueldo');
    habilitarComponente('btnGuardar');
}

buscarEmpleado = function(cedula){
    let elementoEmpleado;
    let empleadoEncontrado = null;
    for(let i=0;i<empleados.length;i++){
        elementoEmpleado = empleados[i];
        if(elementoEmpleado.cedula == cedula){
            empleadoEncontrado = elementoEmpleado;
            break
        }
    }
    return empleadoEncontrado;

}


agregarEmpleado = function(empleado){
    let siAgrego = false;
    resultado = buscarEmpleado(empleado.cedula);
    if(resultado == null){
        empleados.push(empleado);
        siAgrego = true;
    }
    return siAgrego;
}

guardar = function(){
    let datosValidos = true;
    let valorCedula = recuperarTexto('txtCedula');
    let valorNombre = recuperarTexto('txtNombre')
    let valorApellido = recuperarTexto('txtApellido')
    let valorSueldo = recuperarFloat('txtSueldo')
    
    limpiarErroresGuardar();

    if (valorCedula.length == 10 && valorCedula != undefined){
        for(let i=0;i<valorCedula.length;i++){
            let caracter = valorCedula.charAt(i);
            if(!esDigito(caracter)){
                mostrarTexto('lblErrorCedula', 'Solo debe tener digitos.');
                datosValidos = false;
                break
            }
        }
    }else{
        mostrarTexto('lblErrorCedula', 'Debe tener 10 caracteres.');
        datosValidos = false;
    }

    if (valorNombre.length >= 3 && valorNombre != undefined){
        for(let i=0;i<valorNombre.length;i++){
            let caracter = valorNombre.charAt(i);
            if(!esMayuscula(caracter)){
                mostrarTexto('lblErrorNombre', 'Todos los caracters deben ser mayúsculas.');
                datosValidos = false;
                break
            }
        }
    }else{
        mostrarTexto('lblErrorNombre', 'Debe tener al menos 3 caracteres.')
        datosValidos = false;
    }

    if (valorApellido.length >= 3 && valorApellido != undefined){
        for(let i=0;i<valorApellido.length;i++){
            let caracter = valorApellido.charAt(i);
            if(!esMayuscula(caracter)){
                mostrarTexto('lblErrorApellido','Todos los caracters deben ser mayúsculas.');
                datosValidos = false;
                break
            }
        }
    }else{
        mostrarTexto('lblErrorApellido', 'Debe tener al menos 3 caracteres.');
        datosValidos = false;
    }

    if (isNaN(valorSueldo)){
        mostrarTexto('lblErrorSueldo', 'El valor debe ser flotante.');
        datosValidos = false;
    }else{
        if(valorSueldo >= 5000 || valorSueldo <= 400 ){
            mostrarTexto('lblErrorSueldo', 'El valor debe ser o estar entre el rango de 400 a 5000.');
            datosValidos = false;
        }
    }

    if(datosValidos){
        if(esNuevo == true){
            let empleado = {};
            empleado.cedula = valorCedula;
            empleado.nombre = valorNombre;
            empleado.apellido = valorApellido;
            empleado.sueldo = valorSueldo;
            
            let empleadoAgregado = agregarEmpleado(empleado);
            if(empleadoAgregado){
                alert('EMPLEADO GUARDADO CORRECTAMENTE')
                mostrarEmpleado();
                deshabilitarIngresoDatos();
            }else{
                alert('YA EXISTE UN EMPLEADO CON LA CEDULA ' + valorCedula);
            }

        }
    }
    


}