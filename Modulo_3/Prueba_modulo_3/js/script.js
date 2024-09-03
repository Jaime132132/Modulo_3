document.getElementById('convert-btn').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;

    if (!amount) {
        alert("Por favor, ingresa un monto.");
        return;
    }

    fetch('mindicador.json')
        .then(response => response.json())
        .then(data => {
            const currencyData = data[currency];
            const rate = currencyData.valor;
            const result = amount / rate;
            document.getElementById('result').textContent = `${amount} CLP son ${result.toFixed(2)} ${currencyData.nombre}`;
        })
        .catch(error => {
            document.getElementById('result').textContent = "Hubo un error al cargar los datos locales.";
            console.error("Error al cargar datos locales:", error);
        });
});
