const EMPLEA = document.querySelector("#emplea");

EMPLEA.addEventListener ("submit", calcularSueldo)
function calcularSueldo(evt){
    evt.preventDefault();
    let NumHoras = document.querySelector("#txtNumHorasTrab").value;
    let cuota= document.querySelector("#txtCuota").value;
    let tipoEmpleado = document.querySelector("#cmbTipoEmpleado").value;

    let total;
    let sub= 0;

    if (tipoEmpleado=="tipo1"){
        sub = (NumHoras-40) * cuota * 1.5;
       total = (40*cuota)+ sub;

    } else if (tipoEmpleado=="tipo2"){
        sub = (NumHoras-40) * cuota * 2;
        total= (40*cuota)+ sub;

    } else if (tipoEmpleado=="tipo3"){
        sub = (NumHoras-40) * cuota * 2.5;
        total= (40*cuota)+ sub;

    } else if (tipoEmpleado=="tipo4"){
        sub = (NumHoras-40) * cuota * 3;
        total= (40*cuota)+ sub;
    }
        
    let imprimir = document.getElementById("result")
    imprimir.textContent= `Subtotal a pagar  $${total}`
}