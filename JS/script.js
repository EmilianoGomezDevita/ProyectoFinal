console.log("JS conectado")

const botonesCompra = document.querySelectorAll(".btn-comprar");

botonesCompra.forEach(function(boton) {
    boton.addEventListener("click", function() {
        // Buscamos el elemento .mensaje que es hermano del botón clickeado
        const mensajeLocal = boton.parentElement.querySelector(".mensaje");

        if (mensajeLocal) {
            mensajeLocal.textContent = "Producto agregado al carrito";
            
            setTimeout(function() {
                mensajeLocal.textContent = "";
            }, 3000);
        }
    });
});