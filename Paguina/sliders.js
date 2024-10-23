let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const listaCarrito = document.getElementById('lista-carrito');
const listaCarritoPago = document.getElementById('lista-carrito-pago');

function mostrarSeccion(seccion) {
    document.querySelectorAll('.seccion').forEach(element => {
        element.style.display = 'none';
    });
    document.getElementById(seccion).style.display = 'block';
}

function mostrarCarrito() {
    mostrarSeccion('carrito');
    actualizarCarrito();
}

function mostrarPago() {
    mostrarSeccion('pago');
    actualizarCarritoPago();
}

function agregarAlCarrito(producto, precio, cantidad) {
    const item = {
        producto,
        precio,
        cantidad: parseInt(cantidad),
        total: precio * cantidad
    };
    carrito.push(item);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert('Producto agregado al carrito');
    actualizarContador();
}

function actualizarCarrito() {
    listaCarrito.innerHTML = '';
    if (carrito.length === 0) {
        listaCarrito.innerHTML = '<p>No hay productos en el carrito.</p>';
    } else {
        carrito.forEach(producto => {
            const div = document.createElement('div');
            div.className = 'producto-en-carrito';
            div.innerHTML = `
                <h3>${producto.producto}</h3>
                <p>Precio: $${producto.precio}</p>
                <p>Cantidad: ${producto.cantidad}</p>
            `;
            listaCarrito.appendChild(div);
        });
    }
}

function actualizarCarritoPago() {
    listaCarritoPago.innerHTML = '';
    if (carrito.length === 0) {
        listaCarritoPago.innerHTML = '<p>No hay productos en el carrito.</p>';
    } else {
        carrito.forEach(producto => {
            const div = document.createElement('div');
            div.className = 'producto-en-carrito';
            div.innerHTML = `
                <h3>${producto.producto}</h3>
                <p>Precio: $${producto.precio}</p>
                <p>Cantidad: ${producto.cantidad}</p>
                <p>Total: $${producto.total}</p>
            `;
            listaCarritoPago.appendChild(div);
        });
    }
}

function actualizarContador() {
    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    document.getElementById('cart-count').innerText = totalItems;
}

document.getElementById('confirmar-pago').onclick = function() {
    alert('Pago confirmado. Gracias por tu compra!');
    localStorage.removeItem('carrito');
    carrito = [];
    actualizarContador();
    mostrarSeccion('Inicio'); // Regresa a la sección de inicio
};

// Iniciar mostrando la sección de inicio
mostrarSeccion('Inicio');
