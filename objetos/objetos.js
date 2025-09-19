
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

