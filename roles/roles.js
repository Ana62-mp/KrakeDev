let esNuevo = false;
let empleados = [
    {cedula:"1714616123",nombre:"JOHN",apellido:"CENA",sueldo:500.0},
    {cedula:"0914632123",nombre:"LUISA",apellido:"GONZALES",sueldo:900.0},
    {cedula:"1752724747",nombre:"LAURA",apellido:"LAZO",sueldo:750.0}
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
    limpiarErroresGuardar
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
                esNuevo = false;
            }else{
                alert('YA EXISTE UN EMPLEADO CON LA CEDULA ' + valorCedula);
            }

        }else{
            empleadoBuscado = buscarEmpleado(valorCedula);
            empleadoBuscado.nombre = valorNombre;
            empleadoBuscado.apellido = valorApellido;
            empleadoBuscado.sueldo = valorSueldo;
            alert('EMPLEADO MODIFICADO EXITOSAMENTE');
            mostrarEmpleado();
            deshabilitarIngresoDatos();
        }
        
    }


}

ejecutarBusqueda = function(){
    let valorCedula = recuperarTexto('txtBusquedaCedula');
    let empleadoBuscado = buscarEmpleado(valorCedula);
    if(empleadoBuscado == null){
        alert('EMPLEADO NO EXISTE')
    }else{
        mostrarTextoEnCaja('txtCedula', empleadoBuscado.cedula);
        mostrarTextoEnCaja('txtNombre', empleadoBuscado.nombre);
        mostrarTextoEnCaja('txtApellido', empleadoBuscado.apellido);
        mostrarTextoEnCaja('txtSueldo', empleadoBuscado.sueldo);

        habilitarComponente('txtNombre');
        habilitarComponente('txtApellido');
        habilitarComponente('txtSueldo');
        habilitarComponente('btnGuardar');
        deshabilitarComponente('txtCedula');
    }
}

limpiar = function(){
    esNuevo = false;
    mostrarTextoEnCaja('txtCedula', '');
    mostrarTextoEnCaja('txtNombre', '');
    mostrarTextoEnCaja('txtApellido', '');
    mostrarTextoEnCaja('txtSueldo', '');
    deshabilitarIngresoDatos();
    limpiarErroresGuardar();
}

buscarPorRol = function(){
    let valorCedula = recuperarTexto('txtBusquedaCedulaRol');
    let empleadoEncontrado = buscarEmpleado(valorCedula);
    if(empleadoEncontrado != null){
        mostrarTexto('infoCedula', empleadoEncontrado.cedula);
        mostrarTexto('infoNombre', empleadoEncontrado.nombre + ' ' + empleadoEncontrado.apellido);
        mostrarTexto('infoSueldo', empleadoEncontrado.sueldo);
    }else{
        alert('EL EMPLEADO NO EXISTE');
    }
}

calcularAporteEmpleado = function(sueldo){
    let aporteEmpleado = (sueldo * 9.45)/100;
    return aporteEmpleado;
}

calcularValorAPagar = function(sueldo, aporteIess, descuento){
    let valorAPagarEmpleado = sueldo - aporteIess - descuento;
    return valorAPagarEmpleado;
}

calcularRol = function(){
    let valorSueldo = recuperarFloatDiv('infoSueldo');
    let valorDescuento = recuperarFloat('txtDescuentos')

    if(!isNaN(valorDescuento) && valorDescuento > 0 && valorDescuento < valorSueldo){
        let aporteIess = calcularAporteEmpleado(valorSueldo);
        mostrarTexto('infoIESS', aporteIess.toFixed(2));
        let valorAPagar = calcularValorAPagar(valorSueldo, aporteIess, valorDescuento);
        mostrarTexto('infoPago', valorAPagar.toFixed(2));
    }

}