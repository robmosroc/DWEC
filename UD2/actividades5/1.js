let name = prompt("Introduzca su nombre");
let surname = prompt("Introduzca su apellido");
let salary = parseFloat(prompt("Introduzca su salario"));
let age = parseInt(prompt("Introduzca su edad"));
let realsalary;
let sum;

if(salary >= 2000)
    realsalary = salary;
else if(salary < 2000 && salary > 1000){
    if(age >= 45){
        sum = salary * 0.03;
        realsalary = salary + sum;
    }
    else{
        sum = salary * 0.1;
        realsalary = salary + sum;
    }
}
else{
    if(age < 30){
        realsalary = 1100;
    }
    else if(age >= 30 && age <= 45){
        sum = salary * 0.03;
        realsalary = salary + sum;
    }
    else{
        sum = salary * 0.15;
        realsalary = salary + sum;
    }
}
alert(`Nombre: ${name} \n Apellido: ${surname} \n Edad: ${age} \n Salario: ${realsalary}`);