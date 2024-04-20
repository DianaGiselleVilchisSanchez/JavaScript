function performBinarySearch() {
  const numbersInput = document.getElementById("numbersInput");
  const searchInput = document.getElementById("searchInput");
  const resultParagraph = document.getElementById("result");

  // Obtener la lista de números ordenados del input
  const numbers = numbersInput.value.split(",").map(Number);
  const targetNumber = parseInt(searchInput.value, 10);

  // pa realizar búsqueda binaria
  const indexFound = binarySearch(numbers, targetNumber);

  // pa ver el resultado
  if (indexFound !== -1) {
    resultParagraph.style.color = 'green';
    resultParagraph.textContent = `El número ${targetNumber} se encuentra en la posición ${indexFound-1} del arreglo`;
  } else {
    resultParagraph.style.color = 'red';
    resultParagraph.textContent = `El número ${targetNumber} no se encontró en la lista.`;
  }
}

function cancelSearch() {
  const resultParagraph = document.getElementById("result");
  resultParagraph.textContent = "";
}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid + 1; // Elemento encontrado, y se devuelve la posición
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // no se encontró
}
