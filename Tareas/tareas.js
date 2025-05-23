 
/* cargar elementso desde el LS */
let arr;
if (JSON.parse(localStorage.getItem("local")) == null){
    arr = []
}else{
    arr = JSON.parse(localStorage.getItem("local"));
}

/* Aplicar elementos al frontend */
document.addEventListener("DOMContentLoaded",function(){
    let lista = document.getElementById("lista");
    for(let e of arr){
        let elemento = document.createElement("li");
        elemento.textContent = e;
        elemento.addEventListener("click",function(){
            lista.removeChild(elemento);
            arr = arr.filter(function(item){
                return item !==e;
            });
            localStorage.setItem("local",JSON.stringify(arr));
        });
        lista.appendChild(elemento);
    }
});

/* Agregar elementos al LS */
document.getElementById("agregar").addEventListener("click",function(){

    let texto = document.getElementById("tarea").value;
    arr.push(texto);
    console.log(texto);
    let lista = document.getElementById("lista");
    let elemento = document.createElement("li");
    elemento.textContent = texto;
    lista.appendChild(elemento);
    document.getElementById("tarea").value = '';
    localStorage.setItem("local",JSON.stringify(arr))
});
