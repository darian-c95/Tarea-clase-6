function pruebaValidarEdades() {
    console.assert(
        validarEdades(544) === 'Este campo solo acepta numeros menores a 110',
        'Esta validacion fallo con un numero menor a 100'
    );

    console.assert(
        validarEdades('') === 'Este campo no puede quedar vacio',
        'La validacion fallo al no validar que el campo no debe quedar vacio'
    );

    console.assert(
        validarEdades('!-.,¿') === 'Este campo no permite ningun otro caracter que no sea numero',
        'Validar edad no valido que el input solo acepte numeros'
    );

    console.assert(
        validarEdades(0) === 'Este campo solo acepta numeros mayores a 0',
        'Esta validacion fallo al no validar que el numero sea mayor a cero'
    );

    console.assert(
        validarEdades(12) === '',
        'Esta validacion fallo con un numero valido'
    );
}
pruebaValidarEdades()