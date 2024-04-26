function calcularEdad(AnioNacimineto){
    alert("Tu edad es: " + (2023 - AnioNacimineto) + " años")
}

function saludar (nombre) {
    alert ("Hello World " + nombre + " desde JavaScript")
}   

function variables (){

    /*Hay 3 formas de declarar una variable
    1. var: Decarar variables pero permite una redeclaracion
        ejm: var edad = 19;
        NOTA:En la actualidad su uso es poco frecunete

    */
    
    var edad = 19;
    var edad = 20;
    console.log("Edad = " + edad);

    /*
    2. let: No permite una declaracion en un mismo scope
    */
    let salario = 10000
    //let salario = 15000
    if (true) {
        let salario = 15000
    }

    console.log ("Tu salario es: $ " + salario )

    /* 3) const: Declara una constantey su valor no cambia
*/
const IVA = 16;
const PI = 3.1416;

console.log ("const IVA =  " + (IVA + 1))
console.log ("const PI = " + (PI - 0.5))

}

function entradaSalidaDatos (){
    //entrada por teclado
    let horasTrabajadas = prompt ("Ingrese horas trabajadas")
    let salarioPorHoras = prompt ("Ingrese el Salario por Hora")

    //Salida por pantalla
    alert ("El Salario del Trabajador es de $" + (salarioPorHoras * horasTrabajadas));
}

function calcularCostoTotal () {
    let precioHabitacion = prompt ("Ingresa el precio de tu habitacion")
    let dias = prompt ("Cuantos dias te hospedaste")
    let subtotal= dias*precioHabitacion;
  
    alert ("El subtotal es de $" + (subtotal))

    if (dias > 15) {
        descuento = subtotal * (20/100);
        alert ("El pago total es $" + (subtotal)+ "  " + "El descuento sera de $" + (descuento) + 
        " El pago final sera de $" + (subtotal-descuento));
    } else if (dias >= 10 || dias < 15) {
        descuento = subtotal * (15/100);
        alert ("El pago total es $" + (subtotal)+ "  " + "El descuento sera de $" + (descuento) + 
        " El pago final sera de $" + (subtotal-descuento));

    } else if (dias>= 5 || dias <= 10){
        descuento = subtotal * (10/100);
        alert ("El pago total es $" + (subtotal)+ "  " + "El descuento sera de $" + (descuento) + 
        " El pago final sera de $" + (subtotal-descuento));

    }else if (dias<=4 || dias>=0){
        alert ("El pago es de $" + (subtotal)+"El pago final sera de $" + (subtotal));
    }
  }
