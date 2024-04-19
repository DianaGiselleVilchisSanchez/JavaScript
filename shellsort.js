function ordenarShellSort() {
    const inputNumeros = document.getElementById('numeros');
    const resultadoDiv = document.getElementById('resultado');
    const tipoOrden = document.getElementById('tipoOrden').value;
  
    const numeros = inputNumeros.value.split(',').map(num => parseInt(num.trim(), 10));
  
    if (numeros.length < 2) {
      resultadoDiv.textContent = 'Ingrese al menos dos números separados por comas.';
      return;
    }
  
    // Implementación del algoritmo Shell Sort
    shellSort(numeros, tipoOrden);
  
    resultadoDiv.innerHTML = `Números ordenados de manera ${tipoOrden}: ${numeros.join(', ')}`;
  }
  
  function shellSort(arr, tipoOrden) {
    const n = arr.length;
    let gap = Math.floor(n / 2);
  
    while (gap > 0) {
      for (let i = gap; i < n; i++) {
        const temp = arr[i];
        let j = i;
  
        while (j >= gap && compara(arr[j - gap], temp, tipoOrden)) {
          arr[j] = arr[j - gap];
          j -= gap;
        }
  
        arr[j] = temp;
      }
  
      gap = Math.floor(gap / 2);
    }
  }
  
  function compara(a, b, tipoOrden) {
    if (tipoOrden === 'ascendente') {
      return a > b;
    } else {
      return a < b;
    }
  }
  
  function limpiar() {
    document.getElementById('numeros').value = '';
    document.getElementById('resultado').innerHTML = '';
  }
  