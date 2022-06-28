function obtenerMayorSalario(numeros) {
    let mayorSalario = numeros[0];

    for (let i = 1; i < numeros.length; i++) { 

        if (numeros[i] > mayorSalario) {
            mayorSalario = numeros[i];
        }

    }
    
    return mayorSalario;  
}

function obtenerMenorSalario(numeros) {
    let menorSalario = numeros[0];

    for (let i = 1; i < numeros.length; i++) { 
    
        if (numeros[i] < menorSalario) {
            menorSalario = numeros[i];
        }
    
    }

    return menorSalario;
}

function obtenerPromedioAnual(numeros) {
    let acumulador = 0;

    for (let i = 0; i < numeros.length; i++) {
        
        acumulador += numeros[i]; 
        
    }
    
    let promedio = ((acumulador / numeros.length).toFixed(2));
    
    return promedio;
  
}

function obtenerPromedioMensual(numeros) {
    let acumulador = 0;

    for (let i = 0; i < numeros.length; i++) {
    
        acumulador += numeros[i];

    }

    let promedio = ((acumulador / numeros.length).toFixed(2));
    
    return (promedio / 12).toFixed(2);

}
