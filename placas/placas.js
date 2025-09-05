validarPlacas = function(){
    let erroresEstructura;
    let cmpTexto = recuperarTexto('txtPlaca');
    erroresEstructura = validarEstructura(cmpTexto);
    if(erroresEstructura == null){
        mostrarTexto('lblResultado', 'ESTRUCTURA VALIDA');
        mostrarTexto('lblError1', '');
    }else{
        mostrarTexto('lblResultado', 'ESTRUCTURA INCORRECTA');
        mostrarTexto('lblError1', erroresEstructura);
    }
}