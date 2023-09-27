let num = parseInt(prompt("Introduzca un número"));
let num2 = parseInt(prompt("Introduzca un número"));
while(num != num2)
{
    if(num > num2)
    {
        num2 = parseInt(prompt("El número anterior es mayor. Inténtelo de nuevo:"));
    }
    else
    {
       num2 = parseInt(prompt("El número anterior es menor. Inténtelo de nuevo:"));
    }
}
alert("Correcto!"); 