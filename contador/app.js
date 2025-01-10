let contador = 0;

//const botonGeneral = document.querySelector('.btn');
const botonIncrementar = document.querySelector('.increase');
const botonDecrementar = document.querySelector('.decrease');
const botonResetear = document.querySelector('.reset');
const valorContador = document.querySelector('#value');

botonIncrementar.addEventListener('click', () => {
    contador++;
    cambiarColor();
    valorContador.textContent = contador;
});

botonDecrementar.addEventListener('click', () => {
    contador--;
    cambiarColor();
    valorContador.textContent = contador;
});

botonResetear.addEventListener('click', () => {
    contador = 0;
    cambiarColor();
    valorContador.textContent = contador;
});

const cambiarColor = () => {
    if(contador > 0){
        valorContador.style.color = 'green';
    }else if(contador < 0){
        valorContador.style.color ='red';
    }else{
        valorContador.style.color = 'black';
    }
};

//botonGeneral.addEventListener('click', cambiarColor())