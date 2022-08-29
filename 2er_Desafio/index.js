/*
Se quiere hacer un programa . 

*/

//Solucion 1 

function sumador(calificaciones){
    
    for(let i = calificaciones; i<calificaciones+1; i++){
        valor = parseInt(prompt("Ingrese las calificaciones"));
        cuantificaionNotas = cuantificaionNotas + valor;
    };
    return cuantificaionNotas
}

funtion promedio(numero1, numero2){

}

let cantidadDeAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos que hay en el aula: "));

let suma = sumador(cantidadDeAlumnos);

let promedio = (suma,cantidadDeAlumnos) => {return suma/cantidadDeAlumnos}

