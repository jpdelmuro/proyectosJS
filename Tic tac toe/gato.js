let inicio = true;
function opcion(elemento){
    if(elemento.textContent !== 'X' && elemento.textContent !== 'O'){
        if(inicio){
            elemento.textContent = 'X';
            inicio = false;
        }else{
            elemento.textContent = 'O';
            inicio = true;
        }
    }
}

