let num = prompt("Introduzca un número ");
let message;
if (num % 2 == 0)
    message = "El número es par";
else
    message = "El número es impar ";

if (num % 3 == 0)
    message += ", es múltiplo de 3";
if (num % 5 == 0)
    message += ", es múltiplo de 5";

alert(message);