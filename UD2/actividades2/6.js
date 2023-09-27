let num1 = parseInt(prompt("Introduzca un número"));
let op = prompt("Introduzca el operador");
let num2 = parseInt(prompt("Introduzca el segundo número"));

switch(op)
{
    case "+":
        alert(num1 + num2);
        break;
    case "-":
        alert(num1 - num2);
        break;
    case "*":
        alert(num1 * num2);
        break;
    case "/":
        alert(num1 / num2);
        break;
    default:
        alert("El operador no es válido.");
}