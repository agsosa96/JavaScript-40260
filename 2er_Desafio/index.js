/*
Se quiere hacer un programa para calcular el promedio de un aula de alumnos  

*/

//Solucion 1 

function sumador(calificaciones){
    
    for(let i = calificaciones; i<calificaciones+1; i++){
        valor = parseInt(prompt("Ingrese las calificaciones"));
        cuantificacionNotas = cuantificaionNotas + valor;
    }

    return cuantificacionNotas
}

function promedio(numero1, numero2){
    valor = numero1 / numero2
    return valor
}

let cantidadDeAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos que hay en el aula: "));

let suma = sumador(cantidadDeAlumnos);

alert("La cantidad de alumnos es: "),promedio(suma/cantidadDeAlumnos)

