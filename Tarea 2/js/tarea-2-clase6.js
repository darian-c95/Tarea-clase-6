// TAREA:
// Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
// Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.
// Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).

// https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener
// https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
// https://developer.mozilla.org/en-US/docs/Web/API/EventListener

// HACER UN CONTADOR QUE SE SUME POR CADA CLICK, ASIGNARLO A UNA VARIABLE E IMPRIMIRLO JUNTO AL INPUT. EL BOTON LIMPIAR POR CADA CLICK VA A REDUCIR SU NUMERO A 1(contador - 1)
// PENDIENTE: OCULTAR BOTONES SEGUN CONVENGA, REESCRIBIR EL PROMEDIO MENSUAL, ARREGLAR BUG DE CALCULOMENSUAL(resultado negativo), CUANDO LLENAMOS LLS INPUT Y AGREGAMOS OTRO, QUE NO BORRE LOS DATOS ANTERIORES AL AGREGAR UN NUEVO INPUT

let cantidadFamiliares = 0;
document.querySelector('#btn-crear').onclick = function (event) {
  cantidadFamiliares += 1;

  mostrarBotonLimpiarCalcular()
  crearFamiliar(cantidadFamiliares)
  // borrarFamiliaresAnteriores();
  // crearFamiliares(cantidadFamiliares);
  
  event.preventDefault();
};

document.querySelector('#btn-calcular').onclick = function(event) {
  const numeros = validarFormulario();
  mostrarSalarios('mayor-salario', obtenerMayorSalario(numeros));
  mostrarSalarios('menor-salario', obtenerMenorSalario(numeros));
  mostrarSalariosM('salario-anual', obtenerPromedioAnual(numeros));
  mostrarSalariosM('salario-mensual', obtenerPromedioMensual(numeros));

  event.preventDefault();
};

document.querySelector('#btn-resetear').onclick = resetear;

function borrarFamiliaresAnteriores() {
  const $familiares = document.querySelectorAll('.familiar');
  for (let i = 0; i < $familiares.length; i++) {
    $familiares[i].remove();
  }
}

// function crearFamiliares(cantidadFamiliares) {

//   for (let i = 0; i < cantidadFamiliares; i++) {
//     crearFamiliar(i);
//   }
// }

function crearFamiliar(indice) {
  const $div = document.createElement('div');
  $div.className = 'familiar';

  const $label = document.createElement('label');
  $label.textContent = 'Sueldo anual del familiar ' + (cantidadFamiliares);
  const $input = document.createElement('input');
  $input.type = 'number';

  $div.appendChild($label);
  $div.appendChild($input);

  const $familiares = document.querySelector('#familiares');
  $familiares.appendChild($div);
}

function resetear() {
  cantidadFamiliares = 0
  borrarFamiliaresAnteriores();
  ocultarBotonLimpiarCalcular();
  ocultarResultados();
}

function mostrarBotonLimpiarCalcular() {
  document.querySelector('#btn-limpiar').className = '';
  document.querySelector('#btn-calcular').className = '';
}

function ocultarBotonLimpiarCalcular() {
  document.querySelector('#btn-limpiar').className = 'ocultar';
  document.querySelector('#btn-calcular').className = 'ocultar';
}

function ocultarResultados() {
  document.querySelector('#analisis').className = 'ocultar';
}

function mostrarResultados() {
  document.querySelector('#analisis').className = '';
}

function mostrarSalarios(tipo, valor) {
  document.querySelector(`#${tipo}-anual`).textContent = valor;
  
}

function mostrarSalariosM(tipo, valor) {
  document.querySelector(`#${tipo}-promedio`).textContent = valor;
}

document.querySelector('#btn-limpiar').onclick = function (event) {
  cantidadFamiliares -= 1;
  if (cantidadFamiliares === 0) {
    ocultarBotonLimpiarCalcular();
    ocultarResultados();
    borrarMensajes()
  } 
  const $familiares = document.querySelectorAll('.familiar');
  let longitudFamiliares = $familiares.length
  $familiares[longitudFamiliares - 1].remove();
  
  event.preventDefault();
}

// A las 2 tareas de la clase 6, ponerles las validaciones que consideren
// necesarias(usando RegExp, forEach, Objetos, poner estilos, mostrar los errores en la interfaz de usuario y escribir pruebas)

function validarSalario(salario) {
  if(salario === 0) {
    return 'Este campo solo acepta numeros, y que sean mayores a cero';
  } 
  
  if(salario > 1000000) {
    return 'Este campo solo acepta numeros menores a siete cifras';
  }

  return '';
}

 
function validarFormulario() {
borrarMensajes();
let salarios = [];

const $sueldosFamiliares = document.querySelectorAll('.familiar input');
$sueldosFamiliares.forEach(function(valores){
  let $alario = Number((valores).value);

  const mensajeValidarSalario = validarSalario($alario);
  

  if(mensajeValidarSalario !== '') {

    const $errores = document.querySelector('#errores');
    valores.className = 'error';
    const $error = document.createElement('li');
    $error.innerText = mensajeValidarSalario;
    $errores.appendChild($error);

  } 
  
  else {
    valores.className = '';
    salarios.push($alario);
  }
  
});

  exito()

  return salarios;
}


function exito() {
  const esExito = document.querySelectorAll('li').length === 0;
  if(esExito) {
    mostrarResultados(); 
  }
}


function borrarMensajes() {
  let $labels = document.querySelectorAll('#errores li');
      $labels.forEach(function(label){
              label.remove()
      });

}







































  
















  // let contador = 0;
  // document.querySelector('#btn-crear').onclick = function () {
  //     contador += 1;
  //       const nodoDosPagina = document.querySelector('body');
  //       const tagLabel = document.createElement('label'); 
  //       const textoLabel = document.createTextNode(`Sueldo anual del familiar ${contador}`);
  //       tagLabel.setAttribute('id', `label-number-${contador}`);
        
  //       tagLabel.appendChild(textoLabel);
  //       nodoDosPagina.appendChild(tagLabel);
  
  
  //       const nodoPagina = document.querySelector('body');
  //       const nuevoParrafo = document.createElement('input'); 
  //       nuevoParrafo.setAttribute('type', 'number');
  //       nuevoParrafo.setAttribute('id', `input-number-${contador}`);
  //       nuevoParrafo.setAttribute('class', 'input-group');
  //       nodoPagina.appendChild(nuevoParrafo); 
    
  //   }
  
  //   const $botonLimpiar = document.querySelector('#btn-limpiar');
  
  //   $botonLimpiar.onclick = function () {
  //     contador -= 1;
  //     if (contador < 0) {
  //       contador = 0;
  //     }     
  //       document.querySelector(`#input-number-${contador + 1}`).remove()
  //       document.querySelector(`#label-number-${contador + 1}`).remove()
  //   }
  
  // const $botonCalcular = document.querySelector('#btn-calcular');
  
  // $botonCalcular .onclick = function () {
    
  //     let mostrarParrafo = document.querySelector('p').style.display = 'block'
  //     let promedioSalarioAnual;
  //     let promedioSalarioMensual;
  //     let sumaSalarios = 0;
  //     let mayorSalario = 0;
  //     let menorSalario = 0;
  //     let cantidadIntegrantes = 0;
  
  //     if(contador === 0) {
  //       document.querySelector('p').style.display = 'none'
  //     } 
      
  
  //     for(let i = 1; i <= contador; i++) {
  //       let numeroInput = Number(document.querySelector(`#input-number-${i}`).value);
  //       sumaSalarios += numeroInput;
  
  //       if(i === 1) {
  //         mayorSalario = numeroInput;
  //         menorSalario = numeroInput;
  //       } else if(numeroInput > mayorSalario) {
  //         mayorSalario = numeroInput;
  //       } else if(numeroInput === 0) {
  //         menorSalario > numeroInput;
  //       } else if(numeroInput < menorSalario) {
  //         menorSalario = numeroInput;
  //       }
        
  //       if (numeroInput > 0) {
  //         cantidadIntegrantes += 1;
  //       }
  
  //     }
  //     promedioSalarioAnual = sumaSalarios / cantidadIntegrantes;
  //     promedioSalarioMensual = promedioSalarioAnual / 12;
  
  //     document.querySelector('#salario-anual-promedio').innerText = `El salario Anual promedio es ${promedioSalarioAnual}`;
  //     document.querySelector('#salario-mensual-promedio').innerText = `El salario Mensual promedio es ${promedioSalarioMensual}`;
  //     document.querySelector('#mayor-salario-anual').innerText = `El mayor salario anual es ${mayorSalario}`;
  //     document.querySelector('#menor-salario-anual').innerText = `El menor salario anual es ${menorSalario}`;
  
  //   }
   
  //   const $botonResetear = document.querySelector('#btn-resetear');
  //   $botonResetear.onclick = function () {
  
  //     document.querySelector('p').style.display = 'none'
  
  //     for(let i = 1; i <= contador; i++) {
  //       document.querySelector('input').remove();
  //       document.querySelector('label').remove();
  //     }
  //     contador = 0; 
  //   }
  
