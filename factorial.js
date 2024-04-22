document.addEventListener("DOMContentLoaded", function () {
    const calcularButton = document.getElementById("calcular");
    const resultado = document.getElementById("resultado");
  
    calcularButton.addEventListener("click", function () {
      const input = document.getElementById("txtFact");
      const num = parseInt(input.value);


      if (!isNaN(num)) {
        const factorial = calcularFactorial(num);
        resultado.textContent = `El factorial de ${num} es ${factorial}`;
      } else {
        resultado.textContent = "Por favor, ingresa un número válido.";
      }
    });
  

    function calcularFactorial(x) {
      if (x === 0) {
        return 1;
      }
      return x * calcularFactorial(x - 1);
    }
  });
  