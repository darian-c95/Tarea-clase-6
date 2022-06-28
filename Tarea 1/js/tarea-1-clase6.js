document.querySelector('#btn-ingresar').onclick = function (event) {
    let $cantidadIntegrantes = document.querySelector('#personas-familia');
    let cantidadIntegrantes = Number($cantidadIntegrantes.value);

    borrarIntegrantesAnteriores();
    crearIntegrantes(cantidadIntegrantes);
  
    event.preventDefault();
};

document.querySelector('#btn-calcular').onclick = function(event) {
  const numeros = obtenerEdadesIntegrantes();
  mostrarEdad('mayor', obtenerMayorNumero(numeros));
  mostrarEdad('menor', obtenerMenorNumero(numeros));
  mostrarEdad('promedio', obtenerPromedio(numeros));
  
  validarFormulario()
    
  event.preventDefault();
};

document.querySelector('#limpiar-todo').onclick = resetear;

function borrarIntegrantesAnteriores() {
  const $integrantes = document.querySelectorAll('.integrante');
  for (let i = 0; i < $integrantes.length; i++) {
    $integrantes[i].remove();
  }
  borrarMensajes();
}

function crearIntegrantes(cantidadIntegrantes) {

  if (cantidadIntegrantes > 0) {
    mostrarBotonCalculo();
  } else {
    resetear();
  }

  for (let i = 0; i < cantidadIntegrantes; i++) {
    crearIntegrante(i);
  }
}

function crearIntegrante(indice) {
  const $div = document.createElement('div');
  $div.className = 'integrante';

  const $label = document.createElement('label');
  $label.textContent = 'Edad del integrante #: ' + (indice + 1);
  const $input = document.createElement('input');

  $div.appendChild($label);
  $div.appendChild($input);

  const $integrantes = document.querySelector('#integrantes');
  $integrantes.appendChild($div);
}

function resetear() {
  borrarIntegrantesAnteriores();
  ocultarBotonCalculo();
  ocultarResultados();
}

function ocultarBotonCalculo() {
  document.querySelector('#btn-calcular').className = 'ocultar';
}

function mostrarBotonCalculo() {
  document.querySelector('#btn-calcular').className = '';
}

function ocultarResultados() {
  document.querySelector('#analisis').className = 'ocultar';
}

function mostrarResultados() {
  document.querySelector('#analisis').className = '';
}

function mostrarEdad(tipo, valor) {
  document.querySelector(`#${tipo}-edad`).textContent = valor;
}

function obtenerEdadesIntegrantes() {
  const $integrantes = document.querySelectorAll('.integrante input');
  const edades = [];
  for (let i = 0; i < $integrantes.length; i++) {
    edades.push(Number($integrantes[i].value));
  }
  return edades;
}


function validarEdades(edadIntegrante) {

  if(Number(edadIntegrante) > 110) {
    return 'Este campo solo acepta numeros menores a 110';
  }

  if(edadIntegrante === '') {
    return 'Este campo no puede quedar vacio';
  }
  
  if(!/^[0-9]+$/i.test(edadIntegrante)) {
    return 'Este campo no permite ningun otro caracter que no sea numero';
  }
  
  if(Number(edadIntegrante) === 0) {
    return 'Este campo solo acepta numeros mayores a 0';
  }

  return '';
  
}

function validarFormulario() {
borrarMensajes();

const $integrantes = document.querySelectorAll('.integrante input');
$integrantes.forEach(function(edad){
  let $integrante = (edad).value;

  const mensajeValidarEdades = validarEdades($integrante);
  

  if(mensajeValidarEdades !== '') {

    const $errores = document.querySelector('#errores');
    edad.className = 'error';
    const $error = document.createElement('li');
    $error.innerText = mensajeValidarEdades;
    $errores.appendChild($error);
  } 
  
  else {
    edad.className = '';
  }
  
});

  exito()

  return '';
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
