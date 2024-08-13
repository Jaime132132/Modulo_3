
function cambiarColorANegro(event) {
    event.target.style.backgroundColor = 'black';
}

document.getElementById("div1").addEventListener("click", cambiarColorANegro);
document.getElementById("div2").addEventListener("click", cambiarColorANegro);
document.getElementById("div3").addEventListener("click", cambiarColorANegro);
document.getElementById("div4").addEventListener("click", cambiarColorANegro);

let colorSeleccionado = 'white';

document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        colorSeleccionado = 'pink';
    } else if (event.key === 's') {
        colorSeleccionado = 'orange';
    } else if (event.key === 'd') {
        colorSeleccionado = 'skyblue';
    }

    if (['a', 's', 'd'].includes(event.key)) {
        document.getElementById("key").style.backgroundColor = colorSeleccionado;
    }

    let nuevoColor;
    if (event.key === 'q') {
        nuevoColor = 'purple';
    } else if (event.key === 'w') {
        nuevoColor = 'gray';
    } else if (event.key === 'e') {
        nuevoColor = 'brown';
    }

    if (nuevoColor) {
        const nuevoDiv = document.createElement("div");
        nuevoDiv.style.width = "200px";
        nuevoDiv.style.height = "200px";
        nuevoDiv.style.backgroundColor = nuevoColor;
        nuevoDiv.style.border = "1px solid black";
        nuevoDiv.style.marginTop = "10px";
        document.body.appendChild(nuevoDiv);
    }
});
