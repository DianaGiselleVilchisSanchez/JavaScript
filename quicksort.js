function ordenarQuicksort() {
  var inputElement = document.getElementById('numbers');
  var resultadoElement = document.getElementById('resultado');
  var ordenElement = document.getElementById('orden');

  var numeros = inputElement.value.split(',').map(Number);
  if (numeros.length > 1) {
    
    if (ordenElement.value === 'ascendente') {
      quicksortAscendente(numeros, 0, numeros.length - 1);
    } else if (ordenElement.value === 'descendente') {
      quicksortDescendente(numeros, 0, numeros.length - 1);
    }

    resultadoElement.textContent = 'Resultado: ' + numeros.join(', ');
  } else {
    resultadoElement.textContent = 'Ingrese al menos dos números separados por comas.';
  }
}

function quicksortAscendente(arr, low, high) {
  if (low < high) {
    var pi = Ascendente(arr, low, high);

    quicksortAscendente(arr, low, pi - 1);
    quicksortAscendente(arr, pi + 1, high);
  }
}

function Ascendente(arr, low, high) {
  var pivot = arr[high];
  var i = low - 1;

  for (var j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

function quicksortDescendente(arr, low, high) {
  if (low < high) {
    var pi = partitionDescendente(arr, low, high);

    quicksortDescendente(arr, low, pi - 1);
    quicksortDescendente(arr, pi + 1, high);
  }
}

function partitionDescendente(arr, low, high) {
  var pivot = arr[high];
  var i = low - 1;

  for (var j = low; j <= high - 1; j++) {
    if (arr[j] > pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

  function limpiar() {
    document.getElementById('numbers').value = '';
    document.getElementById('resultado').textContent = '';
  }
  