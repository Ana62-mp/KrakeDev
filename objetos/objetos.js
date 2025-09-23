
probarAtributos = function(){
    let persona = {
        nombre : 'Carolina',
        apellido : 'Morales',
        edad : 24,
        estaVivo: true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.estaVivo == false){
        console.log('no esta vivo');
    }else{
        console.log('esta vivo')
    }
}

crearProducto = function(){
    producto1 = {
        nombre : 'Leche',
        precio : 0.95,
        stock : 15
    }

    producto2 = {
        nombre : 'Pan',
        precio : 0.40,
        stock : 30
    }

    console.log(producto1.nombre);
    console.log(producto2.precio);

    if(producto1.stock > producto2.stock){
        console.log('Producto 1 tiene mayor stock')
    }
    if(producto1.stock < producto2.stock){
        console.log('Producto 2 tiene mayor stock')
    }
    if(producto1.stock == producto2.stock){
        console.log('Ambos productos tienen el mismo stock.')
    }

}


modificarAtributos = function(){
    let cuenta = {
        numero : '218931983',
        saldo : 0.0,

    }
    cuenta.saldo = 100;
    cuenta.saldo += 10;
    console.log(cuenta.saldo);
}

crearCliente = function(){
    let cliente = {
        cedula : '1754742728',
        nombre : 'Ana'
    }
    let cliente1 = {};
    cliente1.nombre = 'Romeo';
    cliente1.apellido = 'Salcedo';
    cliente1.cedula = '123123';
}

probarIncrementarSaldo = function(){
    let cta = {numero:'23245', saldo:34.0};
    incrementarSaldo(cta, 100);
    console.log(cta.saldo);
}

probarDeterminarMayor = function(){
    let persona1 = {nombre:'Ana',edad:45};
    let persona2 = {nombre:'Maria',edad:48};
    let mayor = determinarMayor(persona1, persona2);
    if(mayor !=null){
        console.log('El mayor es: ' + mayor.nombre);
    }
}

incrementarSaldo = function(cuenta, monto){
    cuenta.saldo += monto;

}

determinarMayor = function(persona1, persona2){
    if(persona1.edad > persona2.edad){
        return persona1;
    }else if(persona1.edad < persona2.edad){
        return persona2;
    }else{
        return null;
    }
}