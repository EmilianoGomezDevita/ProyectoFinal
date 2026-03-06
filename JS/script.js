console.log("JS conectado")

//mensaje al apretar el boton comprar en productis.html
const botonesCompra = document.querySelectorAll(".btn-comprar");
const toast = document.getElementById("toast");
const contadorProd = document.getElementById("carritoContador")

console.log(contadorProd)

let contador = 0;

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
        
        contador = contador + 1;
        contadorProd.textContent = "Productos en carrito 🛒: " + contador;

    });
});

botonesCompra.forEach(boton => {
    boton.addEventListener("clik", function aumentarContador(){
        contador++;
        contadorProd.textContent = contador;
    });

})

//contador de productos



contadorProd.addEventListener("click", () => {
    if(contadorProd){
        contador++;
    }
})