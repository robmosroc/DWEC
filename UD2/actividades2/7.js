let num = parseInt(prompt("Introduzca un número"));
let total = num;
while(num != 0)
{
    num = parseInt(prompt("Introduzca un número"));
    total += num; 
}
alert(`El total es: ${total}`);