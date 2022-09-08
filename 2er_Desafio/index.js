/*
Se quiere hacer un programa para calcular el promedio de un aula de alumnos  

*/

//Solucion 1 

function sumador(calificaciones){
    cuantificacionNotas  = 0;
    contador = 0;

    while(contador < calificaciones){
        valor = parseInt(prompt("Ingrese las calificaciones"));
        cuantificacionNotas = cuantificacionNotas + valor
        contador += 1;
    }

    return cuantificacionNotas
}

function promedio(numero1, numero2){
    let valor = numero1 / numero2
    return valor
}

let cantidadDeAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos que hay en el aula: "));

try {
    let suma = sumador(cantidadDeAlumnos);
    
    alert (`La cantidad de alumnos es: ${cantidadDeAlumnos} y el promedio de las notas del aula es:  ${promedio(suma,cantidadDeAlumnos)}`)
} catch (error) {
    console.log(error)
}
