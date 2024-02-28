// board layout
let estadoJuego = { simb: "O"}
const board = (function() {
    const x = "X"
    const o = "O"
    const cuadrados = document.querySelectorAll(".casilla")

    const marcar = (jugador)
    cuadrados.forEach((cuadrados,i) =>{
        cuadrados.addEventListener("click", () =>{
            cuadrados.innerText = jugador.simb;
            console.log('"CUADRADO", i:', " CUADRADO", i)
        })
    })
})();
// const cuadrados = document.querySelectorAll(".casilla")

//     cuadrados.forEach((cuadrados,i) =>{
//         cuadrados.addEventListener("click", () =>{
//             cuadrados[i]
//             console.log('cuadrados:', cuadrados)
            
//         })
//     })
