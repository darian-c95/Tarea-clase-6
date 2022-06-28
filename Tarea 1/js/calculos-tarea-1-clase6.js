function obtenerMayorNumero(numeros) {
  let mayorEdad = numeros[0];

  for (let i = 1; i < numeros.length; i++) {

    if (numeros[i] > mayorEdad) {
      mayorEdad = numeros[i];
    }

  }

  return mayorEdad;
}
  
function obtenerMenorNumero(numeros) {
  let menorEdad = numeros[0];

  for (let i = 1; i < numeros.length; i++) {

    if (numeros[i] < menorEdad) {
      menorEdad = numeros[i];
    }

  }

  return menorEdad;
}
  
function obtenerPromedio(numeros) {
  let acumulador = 0;

  for (let i = 0; i < numeros.length; i++) {

    acumulador += numeros[i];
    
  }

  return (acumulador / numeros.length).toFixed(2);
}