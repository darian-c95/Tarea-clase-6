function obtenerMayorSalario(numeros) {
    let mayorSalario = numeros[0];
    for (let i = 1; i < numeros.length; i++) {

        // if (numeros[i] > 100) {
        //     continue;
        // } 

        if (numeros[i] > mayorSalario) {
            mayorSalario = numeros[i];
        }
      }
    
      return mayorSalario;
}

function obtenerMenorSalario(numeros) {
    let menorSalario = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
    
    // if (numeros[i] === 0) {
    //     continue;
    // } 
    
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
        
        // if (numeros[i] === 0) {
        //     cantidadFamiliares -= 1;
        // }
        
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









  
  
    // let mostrarParrafo = document.querySelector('p').style.display = 'block'
    // let promedioSalarioAnual;
    // let promedioSalarioMensual;
    // let contador = 0;
    // let cantidadIntegrantes = 0;

    // if(contador === 0) {
    //   document.querySelector('p').style.display = 'none'
    // } 

    // for(let i = 1; i <= contador; i++) {
    //   let numeroInput = Number(document.querySelector(`#input-number-${i}`).value); // estos es = numeros
    //   contador += numeroInput;

    //   if(i === 1) {
    //     mayorSalario = numeroInput;
    //     menorSalario = numeroInput; 
    //   } else if(numeroInput === 0) {
    //     menorSalario > numeroInput;
    //   }
    //   if (numeroInput > 0) {
    //     cantidadIntegrantes += 1;
    //   }

    // }
    // promedioSalarioAnual = contador / cantidadIntegrantes;
    // promedioSalarioMensual = promedioSalarioAnual / 12;

    // document.querySelector('#salario-anual-promedio').innerText = `El salario Anual promedio es ${promedioSalarioAnual}`;
    // document.querySelector('#salario-mensual-promedio').innerText = `El salario Mensual promedio es ${promedioSalarioMensual}`;
    // document.querySelector('#mayor-salario-anual').innerText = `El mayor salario anual es ${mayorSalario}`;
    // document.querySelector('#menor-salario-anual').innerText = `El menor salario anual es ${menorSalario}`;

  