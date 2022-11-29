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
//         alert("la nota no es un valor valido")
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
// document.write(`El porcentaje de aprobados es ${(aprobados*100)/total}%<br>`)
// document.write(`El porcentaje de desaprobados es ${(desaprobados*100)/total}%<br>`)
// document.write(`la nota promedio es ${nota/total}<br>`)

// -------------------------------------------------------------------------------

// 2.- Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /).
// Realice el algoritmo  para calcular e informar cada operación deseada entre los dos números. Ese proceso se puede  repetir mientras lo desee el usuario. Todos los valores deben ser validados.

// let a = 0,
//   b = 0,
//   op = "";

// do {
//   a = parseInt(prompt("Ingrese el valor del primer numero"));
//   b = parseInt(prompt("Ingrese el valor del segundo numero"));
//     while (isNaN(a && b)) {
//       alert("Los valores ingresado no son numeros, solo puede ingresar numeros")
//       a = parseInt(prompt("Ingrese el valor del primer numero"));
//       b = parseInt(prompt("Ingrese el valor del segundo numero"));
//     }
//   do {
//     op = prompt(
//       "ingrese un operador entre + (Suma), - (Resta), * (Multiplicacion) y / (Division)"
//     );
//     switch (op) {
//       case "+":
//         alert(
//           `El resultado de la suma de los numeros ingresados es: ${a + b}`
//         );
//         break;
//       case "-":
//         alert(
//           `El resultado de la resta de los numeros ingresados es: ${a - b}`
//         );
//         break;
//       case "*":
//         alert(
//           `El resultado de la multiplicacion de los numeros ingresados es: ${
//             a * b
//           }`
//         );
//         break;
//       case "/":
//         alert(
//           `El resultado de la division de los numeros ingresados es: ${a / b}`
//         );
//         break;
//       default:
//         alert("El operador ingresado no es valido, ingrese otro");
//         break;
//     }
//   } while (confirm("desea ingresar otro operador"));
// } while (confirm("desea ingresar otros valores?"));

// --------------------------------------------------------------------------------------------------

// 3.- Se le solicita al usuario que ingrese una cantidad desconocida de números. Realice el algoritmo  para calcular e informar:

// a. La sumatoria de los valores ingresados en orden impar.

// b. El menor valor ingresado.

// c. El mayor valor ingresado.

// Todos los valores deben ser validados.

// let num=0, min=0,may=0,sum=0,b=2;

// while (confirm("Desea ingresar un numero?")) {
//   num=parseInt(prompt("Ingrese el valor del numero"))
//   while (isNaN(num)) {
//     alert("Solo puede ingresar numeros")
//     num=parseInt(prompt("Vuelva a ingresar el valor del numero"))
//   }
//   if (may==0) {
//     may=num
//   } else if (min==0) {
//     min=num
//   } else if (num>may){
//     may=num
//   } else if (num<min){
//     min=num
//   }
//   if (b%2==0) {
//     sum+=num
//     b++
//   }else{
//     b++
//   }
// }
// document.write(`El menor valor ingresado es: ${min}<br>`)
// document.write(`La suma de los numeros ingresados en orden IMPAR es: ${sum}<br>`)
// document.write(`El mayor valor ingresado es: ${may}<br>`)

// ----------------------------------------------------------------------------

// 4.-  Como resultado de una encuesta se recogen los siguientes datos: sexo (H: Hombre, M: Mujer),  edad (en años) y altura (en centímetros).
// Realice el algoritmo para calcular e informar: 
// a. El porcentaje de mujeres mayores a 25 años.

// b. El porcentaje de hombres menores de 18 años.

// c. El promedio de edad de las mujeres.

// d. El promedio de altura de los hombres.

// e. La menor edad ingresada.

// f. La mayor altura ingresada.

// Todos los valores deben ser validados.

// let sexo = "",
//   edad = 0,
//   altura = 0,
//   mujeres = 0,
//   hombresmen=0,
//   mujeresmay=0,
//   alturah=0,
//   totalh=0,
//   totaledadm=0,
//   totalm=0,
//   may=0,
//   min=0;

// while (confirm("Desea ingresar Los datos de una persona?")) {
//   sexo = prompt("Ingrese el sexo de la persona - Hombres (H), Mujeres (M)");
//   while (sexo !== "H" && sexo !== "M" && sexo !== "h" && sexo !== "m") {
//     sexo = prompt(
//       "Ingrese nuevamente el sexo de la persona - Hombres (H), Mujeres (M)"
//     );
//   }
//   edad = parseInt(prompt("Indique la edad de la persona"));
//   while (isNaN(edad)) {
//     alert("Solo puede ingresar numeros");
//     edad = parseInt(prompt("Vuelva a ingresar el valor de la edad"));
//   }
//   altura = parseInt(prompt("Indique la altura de la persona, la misma debe estar en centimetros (CM)"));
//   while (isNaN(altura)) {
//     alert("Solo puede ingresar numeros");
//     altura = parseInt(prompt("Vuelva a ingresar el valor de la altura, la misma debe estar en centimetros (CM)"));
//   }
//   if (may==0) {
//     may=altura
//   };
//   if (min==0) {
//     min=edad
//   }; 
//   if (altura>may){
//     may=altura
//   };  
//   if (edad<min){
//     min=edad
//   };
//   if (sexo=="h" || sexo=="H") {
//     if (edad<18) {
//       hombresmen++
//       totalh++
//       alturah+=altura
//     }else{
//       totalh++
//       alturah+=altura
//     }
//   } else if(edad>25) {
//     totalm++
//     totaledadm+=edad
//     mujeresmay++
//   } else{
//     totalm++
//     totaledadm+=edad
//   }
// }
// document.write(`--------------------------------------<br>`)
// document.write(`El porcentaje de mujeres mayores de 25 años: ${(mujeresmay*100)/totalm}%<br>`)
// document.write(`El porcentaje de hombres menores de 18 años: ${(hombresmen*100)/totalh}%<br>`)
// document.write(`El promedio de edad de las mujeres: ${totaledadm/totalm} años<br>`)
// document.write(`El promedio de altura de los hombres ${alturah/totalh}cm<br>`)
// document.write(`La menor edad ingresada ${min} años<br>`)
// document.write(`La mayor altura ingresada ${may} años<br>`)
// document.write(`--------------------------------------<br>`)

// --------------------------------------------------------------------

// 5.- Determinar en un conjunto de n números naturales:
// ¿ Cuántos son menores que 15 ?
// ¿ Cuántos son mayores que 50 ?
// ¿ Cuántos están en el rango entre 25 y 45 ?

// let numero=0,menores=0,mayores=0,rango=0

// while (confirm("Desea ingresar un numero?")) {
//   numero=parseInt(prompt("Ingrese el numero"))
//     while (isNaN(numero)) {
//     alert("Solo puede ingresar numeros");
//     numero=parseInt(prompt("Ingrese nuevamente el numero"))
//   }
//   if (numero<15) {
//     menores++
//   }
//   if (numero>50) {
//     mayores++
//   }
//   if (numero>25 && numero<45) {
//     rango++
//   }
// }
// document.write(`La cantidad de numeros mayores a 50 es: ${mayores}<br>`)
// document.write(`La cantidad de numeros menores a 15 es: ${menores}<br>`)
// document.write(`La cantidad de numeros entre 25 y 45 es: ${rango}<br>`)

// ------------------------------------------------------------------------

// 6.- Los padres de una niña le prometieron darle 10 dólares cuando cumpliera 12 años de edad y duplicar el regalo en cada cumpleaños subsiguiente hasta que el regalo excediera 1000 dólares. Escriba un programa para determinar qué edad tendrá la niña cuando se le dé la última cantidad y la cantidad total recibida.

// let edad=12,dinero=10

// if(confirm("Desea iniciar el programa para determinar la edad y la cantidad de dinero?"))
// {
//     for (dinero; dinero < 1000; edad++) {
//         dinero=dinero*2
//     }
//     document.write(`La cantidad de dinero maxima que se le regalaria seria ${dinero}$<br>`)
//     document.write(`La edad Maxima al superar el monto de $1000 es de ${edad} años<br>`)
// }

// ----------------------------------------------------------------------
// .7.- Realizar un ejercicio que visualice los números del 1 al 10 en orden inverso.

// let num=10

// if(confirm("Desea iniciar el programa para mostrar los numeros del 10 al 1?")){
//     for (num; num>0; num--) {
//         document.write(`${num}<br>`)
//     }
// }

// ----------------------------------------------------------------------

// 8.- realizar un ejercicio en el cual se visualicen los números primos del 1 al 20.



// for (let n=1;n<=20;n++) {
//     let c=0
// for (let i=1;i<=n;i++) {
//     if(n%i==0){
//         c++
//     }
// }
// if(c==2){
//     document.write(`${n} es primo <br>`)
// }
// }



// -------------------------------------------------------------------------

// 9.  imprima la suma de todos los números impares entre 1 y 100

// let num=1,sum=0

// if(confirm("Desea iniciar el programa para mostrar la suma de los numeros impares del 1 al 100?")){
//     for(num;num<=100;num++){
//         if(num%2==1){
//             sum+=num
//         }
//     }
//     document.write(`La suma total de los numeros impares es ${sum}`)
// }

// -------------------------------------------------------------------------


// 10.-  Reciba un número ingresado por el usuario en la página y determine si el número es un número primo. Número primo: Un número que solo puede ser divisible por 1 y él mismo. 1 no es un número primo ni un número compuesto. Un número primo debe ser un número natural mayor que 1.

// let num=0

// while (confirm("Desea ingresar un numero para verificar si es primo?")) {
//     num=parseInt(prompt("Ingrese un mumero"))
//     let cont=0
//     for(let i = 1; i<=num;i++){
//         if(num%i==0){
//             cont++
//         }
//     }
//     if(cont==2){
//         document.write(`${num} es un numero primo <br>`)
//     }else{
//         document.write(`${num} no es un numero primo <br>`)
//     }
// }