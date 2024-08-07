document.getElementById("imagen").addEventListener("click", function() {
    if (this.style.border) {
        this.style.border = "";
    } else {
        this.style.border = "2px solid red";
    }
});
