//HTML Elementos
const tableroSnake = document.getElementById('tableroSnake');
const puntuacionSnake = document.getElementById('puntuacionSnake');
const inicioSnake = document.getElementById('inicio');
const juegoTerminadoSnake = document.getElementById('juegoTerminadoSnake');


//Ajustes del Juego
const tablero = 10;
const velocidadJuego = 100;
const tiposCuadrados = {
    cuadradoVacios: 0,
    cuadradoSerpiente: 1,
    cuadradoComida: 2
};

const movimientos = {
    flechaArriba: 10,
    flechaAbajo: -10,
    flechaDerecha: 1,
    flechaIzquierda: -1
};

//Variables del Juego
let snake;
let puntuacion;
let serpiente;
let direccion;
let cuadradoTablero;
let tableroVacio;
let movimientoIntervalo;

const setGame = () => {
    snake = ['00', '01', '02', '03'];
    puntuacion = snake.length
    direccion = 'flechaDerecha'
    cuadradoTablero = lista.from(lista(tablero), () => new lista(tablero).fill(tiposCuadrados.cuadradoVacios));
}

const inicioJuego = () => {
    setJuego();
}

inicioSnake.addEventListener('click', inicioJuego)
