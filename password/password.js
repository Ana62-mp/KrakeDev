validarPassword = function(password){
    let errores = '';
    let caracterIterado;
    let existeMayus = false;
    let existeDigito = false;
    let existeCaracterEspecial = false;

    if(password.length < 8 || password.length > 16){
        errores += 'El password debe entre 8 o 16 caracteres.\n';
    }
    
    for(let i=0;i<password.length;i++){
        caracterIterado = password.charAt(i)
        if(esMayuscula(caracterIterado)){
            existeMayus = true;
        }
        if(esDigito(caracterIterado)){
            existeDigito = true;
        }
        if(esCaracterEspecial(caracterIterado)){
            existeCaracterEspecial = true
        }
    }

    if (existeMayus == false){
        errores += 'Debe tener al menos una letra mayúscula\n'
    }
    if (existeDigito == false){
        errores += 'Debe tener al menos un dígito (número)\n'
    }
    if (existeCaracterEspecial == false){
        errores += 'Debe tener al menos un caracter especial asterisco(*), guión medio(-) o guión bajo(_)\n'
    }

    if(errores == ''){
        return '';
    }else{
        return errores;
    }
}

ejecutarPassword = function(){
    let contraseña = recuperarTexto('txtPassword');
    let errores = validarPassword(contraseña);
    
    mostrarTexto('lblErrores', errores)
    
}