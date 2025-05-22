let i = 0;
let j = 0;
function elegir(eleccion, pick){
    document.getElementById(eleccion).addEventListener("click",function(){
    const numeroRandom = Math.floor(Math.random() * 3) + 1;
    console.log(eleccion+" " + numeroRandom);
    if(pick == numeroRandom){
        document.getElementById("resultado").innerHTML = "Elegiste " + eleccion + "<br>Empate!";
    }else if(pick == 1 && numeroRandom == 3 || pick == 2 && numeroRandom == 1 || pick == 3 && numeroRandom == 2){
        document.getElementById("resultado").innerHTML = "Elegiste " + eleccion + "<br>Ganaste!";
        document.getElementById("usuario").textContent = ++i;
    }else{
        document.getElementById("resultado").innerHTML = "Elegiste " + eleccion + "<br>Perdiste!";
        document.getElementById("maquina").textContent = ++j;
    }

    if(i >= 10){
        document.body.style.backgroundColor = "greenyellow";
    }else if(j >= 10){
        document.body.style.backgroundColor = "red";
    }

    });
}

elegir("piedra", 1);
elegir("papel", 2);
elegir("tijera", 3);