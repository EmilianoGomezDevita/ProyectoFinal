console.log("JS conectado")

const botonesCompra = document.querySelectorAll(".btn-comprar");
const toast = document.getElementById("toast");

botonesCompra.forEach(boton => {
    boton.addEventListener("click", () => {
        // Reiniciamos la animación si ya estaba corriendo
        toast.classList.remove("show");
        void toast.offsetWidth; // Truco para resetear animaciones CSS
        
        toast.classList.add("show");
        
        // La animación de CSS se encarga de ocultarlo, 
        // pero lo limpiamos en JS después de 3s
        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    });
});