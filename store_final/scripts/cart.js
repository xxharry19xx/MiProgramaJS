function displayCart() {
    // Obtener el carrito del localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Seleccionar el contenedor donde se mostrarán los productos
    const cartItems = document.getElementById('cart-items');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Tu carrito está vacío.</p>';
        return;
    }

    // Crear el contenido HTML para el carrito
    let cartHTML = '<ul>';

    // Calcular el total general
    let totalAmount = 0;

    cart.forEach(product => {
        const productTotal = product.price * product.quantity;
        totalAmount += productTotal;

        cartHTML += `
            <li>
                <img src="${product.image}" alt="${product.title}" style="width: 100px; height: auto;" />
                <h3>${product.title}</h3>
                <p>Color: ${product.color}</p>
                <p>Cantidad: ${product.quantity}</p>
                <p>Precio: $${product.price.toFixed(2)}</p>
                <p>Total: $${productTotal.toFixed(2)}</p>
            </li>
        `;
    });

    cartHTML += '</ul>';

    // Añadir el total general al HTML
    cartHTML += `
        <div class="cart-total">
            <h3>Total General: $${totalAmount.toFixed(2)}</h3>
        </div>
    `;

    // Insertar el contenido en el contenedor
    cartItems.innerHTML = cartHTML;

    // Crear y añadir el botón de pagar
    const payButton = document.createElement('button');
    payButton.id = 'pay-button';
    payButton.className = 'btn-primary';
    payButton.textContent = 'Pagar';
    
    // Añadir el evento de clic al botón
    payButton.addEventListener('click', function() {
        alert('Redirigiendo a la página de pago...');
        // Aquí puedes redirigir a una página de pago o implementar la lógica de pago
        // window.location.href = '/pago.html'; // Ejemplo de redirección
    });

    // Añadir el botón de pagar al contenedor del carrito
    cartItems.appendChild(payButton);
}

// Mostrar el carrito al hacer clic en el icono del carrito
document.getElementById('cart-icon').addEventListener('click', function() {
    document.getElementById('cart-container').style.display = 'block';
    displayCart();
});

// Añadir funcionalidad al botón de cerrar carrito
document.getElementById('close-cart').addEventListener('click', function() {
    document.getElementById('cart-container').style.display = 'none';
});

// Añadir funcionalidad al botón de refrescar carrito
document.getElementById('refresh-cart').addEventListener('click', function() {
    // Vaciar el carrito del localStorage
    localStorage.removeItem('cart');
    
    // Limpiar el contenido del carrito en la interfaz
    document.getElementById('cart-items').innerHTML = '<p>Tu carrito está vacío.</p>';

    // Opcionalmente, puedes ocultar el carrito después de refrescar
    document.getElementById('cart-container').style.display = 'none';
});
