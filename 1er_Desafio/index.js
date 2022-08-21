/*
Se desea hacer un programa que sume todos los numeros positivos  que se piden al usuario. El programa debe terminar con el -1 
si no tiene que seguir piendo numeros.
*/


//Solucion 1
/*
let numero = parseInt(prompt("Ingrese los numeros positivos que quiere sumar: (EL programa termina con -1)"));
let suma = 0;

while(numero != -1){
    if(numero >= 0){
        suma = suma + numero;
        numero = parseInt(prompt("Ingrese los numeros positivos que quiere sumar: (El programa termina con -1)"));
    }
    else{
        suma = -1;
        alert("El numero que tiene que ingresar es mayor a 0")
        numero = parseInt(prompt("Ingrese los numeros positivos que quiere sumar: (El programa termina con -1)"));
    }
    
}

alert(`La suma de los numeros es ${suma}`)
*/

//Solucion 2

let suma = 0;
let numero = 0;

while(true){
    numero = parseInt(prompt("Ingrese los numeros positivos que quiere sumar: (El programa termina con -1)"));
    if(numero === -1){
        break;
    }
    if(numero >= 0){
        suma = suma + numero;
    }else{
        alert("El numero que tieen que ingresar tiene que ser positivo")
    }
}


alert(`La suma de los numeros ingresado es ${suma}`)

/*
//Solucion 3
let suma = 0;
let numero = 0;

while(true){
    numero = parseInt(prompt("Ingrese los numeros positivos que quiere sumar: (El programa termina con -1)"));
    switch(numero){
        case(numero >= 0):
            suma = suma + numero;
        default:
            alert("El numero que tieen que ingresar tiene que ser positivo")
    }
    if(numero === -1){
        break;
    }
}

alert(`La suma de los numeros ingresado es ${suma}`)
*/