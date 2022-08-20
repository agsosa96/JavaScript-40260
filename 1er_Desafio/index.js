let numero = parseInt(prompt("Ingrese los numeros positivos que quiere sumar: (Termina con 0)"));
let suma = numero;

while(numero != 0){
    if(numero < 0){
        alert("El numero que tiene que ingresar es mayor a 0")
        numero = parseInt(prompt("Ingrese los numeros positivos que quiere sumar: (Termina con 0)"));
    }
    else{
        numero = parseInt(prompt("Ingrese los numeros positivos que quiere sumar: (Termina con 0)"));
        if(numero > 0){
            suma = suma + numero;
        }
    }
    
}

alert(`La suma de los numeros es ${suma}`)


