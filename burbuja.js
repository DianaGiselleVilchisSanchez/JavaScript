function ordenarBurbuja() {
  const inputNumeros = document.getElementById('numeros');
  const tipoOrdenamiento = document.getElementById('tipoOrdenamiento').value;
  const resultadoDiv = document.getElementById('resultado');

  const numeros = inputNumeros.value.split(',').map(num => parseInt(num.trim(), 10));

  for (let i = 0; i < numeros.length - 1; i++) {
    for (let j = 0; j < numeros.length - 1 - i; j++) {
      const comparacion = tipoOrdenamiento === 'ascendente' ? numeros[j] > numeros[j + 1] : numeros[j] < numeros[j + 1];

      if (comparacion) {
        const temp = numeros[j];
        numeros[j] = numeros[j + 1];
        numeros[j + 1] = temp;
      }
    }
  }

  resultadoDiv.innerHTML = `Números ordenados de manera ${tipoOrdenamiento}: ${numeros.join(', ')}`;
}

function limpiar() {
  document.getElementById('numeros').value = '';
  document.getElementById('resultado').innerHTML = '';
}
