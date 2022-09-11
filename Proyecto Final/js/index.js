let piezas = document.getElementsByClassName('movil');

let tamanioWidh = [134, 192, 134, 163, 134, 163, 134, 192, 134]
let tamanioHieght = [134, 192, 134, 163, 134, 163, 134, 192, 134]

for(let i = 0; i < piezas.length;i++){
    piezas[i].setAttribute("width", tamanioWidh[i]);
    piezas[i].setAttribute("height", tamanioHieght[i]);
    piezas[i].setAttribute("x", Math.floor((Math.random() *10) + 1));
    piezas[i].setAttribute("y", Math.floor((Math.random() *409) + 1));
}