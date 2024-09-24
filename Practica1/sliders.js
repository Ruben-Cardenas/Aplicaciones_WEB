// Funcionalidad del slider de imágenes
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Cambiar el slide cada 3 segundos
setInterval(nextSlide, 3000);

// Funcionalidad del carrito de compras
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let cartCount = document.getElementById('cart-count');
let listaCarrito = document.getElementById('lista-carrito');

function agregarAlCarrito(producto, precio, cantidad) {
    carrito.push({ producto, precio, cantidad: parseInt(cantidad) });
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
}

function actualizarCarrito() {
    // Actualiza el contador del carrito en todas las páginas
    cartCount.textContent = carrito.length;
    
    // Si está en la página del carrito, muestra los productos
    if (listaCarrito) {
        listaCarrito.innerHTML = '';
        carrito.forEach(item => {
            let div = document.createElement('div');
            div.textContent = `${item.producto} - ${item.cantidad} x $${item.precio}`;
            listaCarrito.appendChild(div);
        });
    }
}

// Llamar a esta función para actualizar el carrito en todas las páginas
actualizarCarrito();




