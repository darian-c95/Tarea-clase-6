function pruebaValidarSalario() {
    console.assert(
        validarSalario(0) === 'Este campo solo acepta numeros, y que sean mayores a cero',
        'Validar salario no valido que el campo sea un numero'
    );

    console.assert(
        validarSalario(2323322323) === 'Este campo solo acepta numeros menores a siete cifras',
        'Validar salario no valido que el numero sea menor a siete cifras'
    )

    console.assert(
        validarSalario(22) === '',
        'Validar salario fallo con un numero valido'
    );
}

pruebaValidarSalario()