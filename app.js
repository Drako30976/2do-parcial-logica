"use strict";
// 1. - . Se le solicita al usuario que ingrese las notas del parcial de los alumnos de una comisión. Se desconoce la cantidad de alumnos. Realice el
// algoritmo para informar:
// a. El porcentaje de alumnos aprobados (nota igual o superior a 4).

// b. El porcentaje de alumnos desaprobados (nota inferior a 4).

// c. El promedio de las notas.

// Tenga en cuenta que solamente las notas pueden ir del 1 al 10.

// let alumno=0,aprobados=0,porcenaprob=0,desaprobados=0,porcentdesap=0,prom=0,total=0,nota=0;

// do {
//     alumno=parseInt(prompt("Ingrese la nota de un alumno"))
//     while(!(alumno>=1 && alumno<=10)){
//         console.log("la nota no es un valor valido")
//         alumno=parseInt(prompt("La nota ingresada no es un valor valido, ingrese otra nota"))
//     }
//     if (alumno>=4) {
//         aprobados++

//     }else{
//         desaprobados++
//     }
//     total++
//     nota=nota+alumno
// } while (confirm("desea ingresar la nota de otro alumno?"));
// console.log(`El porcentaje de aprobados es ${(aprobados*100)/total}`)
// console.log(`El porcentaje de desaprobados es ${(desaprobados*100)/total}`)
// console.log(`la nota promedio es ${nota/total}`)

// -------------------------------------------------------------------------------

// 2.- Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /).
// Realice el algoritmo  para calcular e informar cada operación deseada entre los dos números. Ese proceso se puede  repetir mientras lo desee el usuario. Todos los valores deben ser validados.

let a = 0,
  b = 0,
  op = "";

do {
  a = parseInt(prompt("Ingrese el valor del primer numero"));
  b = parseInt(prompt("Ingrese el valor del segundo numero"));
  do {
    op = prompt(
      "ingrese un operador entre + (Suma), - (Resta), * (Multiplicacion) y / (Division)"
    );
    switch (op) {
      case "+":
        console.log(
          `El resultado de la suma de los numeros ingresados es: ${a + b}`
        );
        break;
      case "-":
        console.log(
          `El resultado de la resta de los numeros ingresados es: ${a - b}`
        );
        break;
      case "*":
        console.log(
          `El resultado de la multiplicacion de los numeros ingresados es: ${
            a * b
          }`
        );
        break;
      case "/":
        console.log(
          `El resultado de la division de los numeros ingresados es: ${a / b}`
        );
        break;
      default:
        console.log("El operador ingresado no es valido, ingrese otro");
        break;
    }
  } while (confirm("desea ingresar otro operador"));
} while (confirm("desea ingresar otros valores?"));
