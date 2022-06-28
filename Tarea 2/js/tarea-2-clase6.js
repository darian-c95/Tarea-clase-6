let cantidadFamiliares = 0;
document.querySelector('#btn-crear').onclick = function (event) {
  cantidadFamiliares += 1;

  mostrarBotonLimpiarCalcular();
  crearFamiliar(cantidadFamiliares) ;
  
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
