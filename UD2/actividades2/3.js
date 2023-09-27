let bros = prompt("Introduzca el numero de hermanos:");
let quantity = prompt("Introduzca la cantidad");
let discount;

if(bros >= 3)
{
    discount = (quantity * 0.15);
    alert(quantity - discount);
}
else if(bros > 0 && bros < 3)
{
    discount = (quantity * 0.05);
    alert(quantity - discount);
}
else
    alert(quantity);
