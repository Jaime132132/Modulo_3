function calcularStickers() {
    let sticker1 = parseInt(document.getElementById("sticker1").value) || 0;
    let sticker2 = parseInt(document.getElementById("sticker2").value) || 0;
    let sticker3 = parseInt(document.getElementById("sticker3").value) || 0;

    let total = sticker1 + sticker2 + sticker3;

    let resultado = document.getElementById("resultado");
    if (total <= 10) {
        resultado.textContent = `Llevas ${total} stickers`;
    } else {
        resultado.textContent = "Llevas demasiados stickers";
    }
}
