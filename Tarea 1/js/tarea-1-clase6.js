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
  // mostrarResultados()
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




  




























// const $botonCalcular = document.querySelector('#btn-ingresar');


// $botonCalcular.onclick = function () {
//     let cantidadIntegrantes = Number(document.querySelector('#personas-familia').value);
    
//     for(let i = 1; i <= cantidadIntegrantes; i++) {
        
//      const nodoDosPagina = document.querySelector('body');
//      const tagLabel = document.createElement('label'); 
//      const textoLabel = document.createTextNode(`Edad del familiar ${i}: `);
//      tagLabel.setAttribute('id', `label-number-${i}`);
     
//      tagLabel.appendChild(textoLabel);
//      nodoDosPagina.appendChild(tagLabel);


//     const nodoPagina = document.querySelector('body');
//     const nuevoParrafo = document.createElement('input'); 
//     nuevoParrafo.setAttribute('type', 'number');
//     nuevoParrafo.setAttribute('id', `input-number-${i}`);
//     nodoPagina.appendChild(nuevoParrafo); 
//  } 
// }


// const $botonCalcularEdades = document.querySelector('#btn-calcular');

// $botonCalcularEdades.onclick = function () {
//     let mayorEdad = Number(document.querySelector('#input-number-1').value);
//     let menorEdad = Number(document.querySelector('#input-number-1').value);
//     let cantidadIntegrantes = Number(document.querySelector('#personas-familia').value);
//     let totalSuma = 0;
    
//     for(let i = 1; i <= cantidadIntegrantes; i++) {
        
//         let familiarX = Number(document.querySelector(`#input-number-${i}`).value);
//         totalSuma = totalSuma + familiarX;
        
//         if(familiarX > mayorEdad) {
//             mayorEdad = familiarX;
//         } else if(familiarX < menorEdad) {
//             menorEdad = familiarX;
//         }
//     }
//     let promedioEdades = totalSuma / cantidadIntegrantes;
//     document.querySelector('#edad-promedio').innerText = `El promedio de edad es ${promedioEdades}`;
//     document.querySelector('#mayor-edad').innerText = `La edad mayor es ${mayorEdad}`;
//     document.querySelector('#menor-edad').innerText = `La edad menor es ${menorEdad}`;
// }


// const $botonLimpiar = document.querySelector('#limpiar-todo');


// $botonLimpiar.onclick = function () {
//     let integrantesBorrar = Number(document.querySelector('#personas-familia').value)
//     for(let i = 1; i <= integrantesBorrar; i++) {
//     document.querySelector(`#input-number-${i}`).remove()
//     document.querySelector(`#label-number-${i}`).remove()
//     }

//     document.querySelector('#personas-familia').value = ''
//     document.querySelector('#edad-promedio').innerText = ''
//     document.querySelector('#mayor-edad').innerText = ''
//     document.querySelector('#menor-edad').innerText = ''
// }




// PARTE 1        // ESTE FRAGMENTO NOS IMPRIME TANTOS LABEL COMO LE INDIQUEMOS
// for(let i = 1; i < 10; i++) {

//     const nodoDosPagina = document.querySelector('body');
//     const tagLabel = document.createElement('label'); //<p></p>
//     const textoLabel = document.createTextNode(`Edad del familiar ${i}: `);
    
//     tagLabel.appendChild(textoLabel);
//     nodoDosPagina.appendChild(tagLabel);
// }


// PARTE 2           //  ESTE CODIGO DA LA CANTIDAD DE INPUT QUE LE PEDIMOS CUANDO APRETAMOS EL BOTON
//  for(let i = 1; i <= 5; i++) {

//  const nodoPagina = document.querySelector('body');
//     const nuevoParrafo = document.createElement('input'); //<p></p>
//     const textoParrafo = document.createTextNode('Yeeee!');
//     nuevoParrafo.appendChild(textoParrafo);
//     nodoPagina.appendChild(nuevoParrafo); 
//  }


// PARTE 3      ESTE FREAGMENTO GENERA UN INPUT Y LE AGREGA  UN ID
// for(let i = 1; i <= 7; i++) {
// const nodoPagina = document.querySelector('body');
// const nuevoInput = document.createElement('input'); //<p></p>
// nodoPagina.appendChild(nuevoInput); 

// nuevoInput.setAttribute('id', `input-number-${i}`);

// }


// PARTE 4    CODIGO QUE DA ACCESO A INFO DE CADA INPUT

// Number(document.querySelector('#input-number-i').value)


// PARTE 5   ESTE FRAGMENTO BORRA TODOS LOS INPUT-LABEL Y SAIGNA UN STRING VACIO A LO DEMAS
// const $botonLimpiar = document.querySelector('#limpiar-todo');


// $botonLimpiar.onclick = function () {
//     let integrantesBorrar = Number(document.querySelector('#personas-familia').value)
//     for(let i = 1; i <= integrantesBorrar; i++) {
//     document.querySelector(`#input-number-${i}`).remove()
//     document.querySelector(`#label-number-${i}`).remove()
//     }

//     document.querySelector('#personas-familia').value = ''
//     document.querySelector('#edad-promedio').innerText = ''
//     document.querySelector('#mayor-edad').innerText = ''
//     document.querySelector('#menor-edad').innerText = ''
// }





// <div class="form-group">
//         <label id="cantidad-familia">
//           Ingrese cantidad de personas que integran su familia
//         </label>
//         <input type="number" id="personas-familia" class="form-control">
//       </div>

//       <div class='button'>
//         <button class="form-control" id="btn-ingresar">Ingresar edades</button>
//       </div>
     
//       <div class='button'>
//         <button class="form-control" id="btn-calcular">Calcular edades</button>
//       </div>

//       <p>
//         <em id="edad-promedio"></em>
//         <em id="mayor-edad"></em>
//         <em id="menor-edad"></em>
//     </p>

//     <button id="limpiar-todo">Limpiar</button>