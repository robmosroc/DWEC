let num1 = prompt("Introduzca un número");
let num2 = prompt("Introduzca el segundo número");
let op = prompt("Introduzca el operador");

switch(op)
{
    case "+":
        alert(num1 + num2);
        break;
    case "-":
        alert(`${num1 - num2}`);
        break;
    case "*":
        alert(`${num1 * num2}`);
        break;
    case "/":
        alert(`${num1 / num2}`);
        break;
    default:
        alert("El operador no es válido.");
}