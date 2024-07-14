document.addEventListener('DOMContentLoaded', () => {
    const decreaseButton = document.querySelector('#decrease');
    const increaseButton = document.querySelector('#increase');
    const quantityElement = document.querySelector('#quantity');
    const priceElement = document.querySelector('#price');
    const totalElement = document.querySelector('#total');

    let quantity = 0;
    const price = parseFloat(priceElement.innerHTML);

    const updateTotal = () => {
        const total = quantity * price;
        totalElement.innerHTML = total.toFixed(2);
    };

    decreaseButton.addEventListener('click', () => {
        if (quantity > 0) {
            quantity--;
            quantityElement.innerHTML = quantity;
            updateTotal();
        }
    });

    increaseButton.addEventListener('click', () => {
        quantity++;
        quantityElement.innerHTML = quantity;
        updateTotal();
    });
});
