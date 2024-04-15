//recibir el id del formulario para poderlo manipular por eventos 
//para poder utilizarlo utilizaremos las funciones del DOM de Javascript
const FRMHOTEL = document.querySelector("#frmHotel");

//crear un evento clic con un Listener 
FRMHOTEL.addEventListener ("submit", calcularHospedaje)
function calcularHospedaje(evt){
    evt.preventDefault();
    let diasHosp = document.querySelector("#txtDiasHosp").value;
    let precioPorDia = document.querySelector("#txtPrecioDiario").value;
    let tipoPago = document.querySelector("#cmbTipoPago").value;
    
    //imprimiendo el resultado
    let imprimir = document.getElementById("result")
    imprimir.textContent= hotelTDA (diasHosp,precioPorDia,tipoPago);

}

//crear TDA para calcular el total a pagar del Hotel
//es lo mismo
/* function hotelTDA (){
}*/

/*es una representación de TDA
// es una representación de javaScript*/

const hotelTDA = (diasHosp,precioPorDia,tipoPago) =>{

    //operaciones//
    let descuento = 0;
    let total = 0;

    //calculando el total 
    let subtotal = diasHosp * precioPorDia;
    
    //validamos descuento en funcion de los dias
    if (diasHosp > 5 && diasHosp <= 10) {
        descuento = subtotal * 0.1
    } else if (diasHosp > 10 && diasHosp <= 15) {
        descuento = subtotal * 0.15
    } else if (diasHosp > 15) {
        descuento = subtotal * 0.2
    }
    total = subtotal - descuento
    if (tipoPago=="tarjeta"){
        //total = total + (total * 0.03)
        total = total * 1.03;
    }
    return `Subtotal a pagar  $${subtotal} Descuento $${descuento} Total $${total} Tipo de Pago:$${tipoPago}`
}
