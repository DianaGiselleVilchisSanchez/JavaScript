function buscar() {
  const numbersInput = document.getElementById('numbersInput');
  const searchInput = document.getElementById('searchInput');

  const numbersString = numbersInput.value;
  const inputValue = parseInt(searchInput.value);

  if (!isNaN(inputValue)) {
    const numeros = numbersString.split(',').map(Number);

    let encontrado = false;
    let posicion = -1;

    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] === inputValue) {
        encontrado = true;
        posicion = i;
        break;
      }
    }

    const resultMessage = document.getElementById('result');
    if (encontrado) {
      resultMessage.style.color = 'green';
      resultMessage.textContent = `El número ${inputValue} ha sido encontrado en la posición ${posicion} del arreglo`;
    } else {
      resultMessage.style.color = 'red';
      resultMessage.textContent = `El número ${inputValue} no ha sido encontrado.`;
    }
  } else {
    alert('Por favor, ingrese un número válido.');
  }
}

function cancelar() {
  const numbersInput = document.getElementById('numbersInput');
  const searchInput = document.getElementById('searchInput');
  const resultMessage = document.getElementById('result');

  numbersInput.value = '';
  searchInput.value = '';
  resultMessage.textContent = '';
}
