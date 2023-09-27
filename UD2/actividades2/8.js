let even = "";
for(i = 25; i > 0; i--)
{
    if(i % 2 == 0)
    {
        even += i + " ";
    }
}
alert(`Los numero pares entre 25 y 1 son: ${even}`);