// board layout

const gameBoard = (function() {
    //getting all the tiles on the board 
    const square = document.querySelectorAll(".casilla")
 
    const mark = (player) =>{
        square.forEach((cuadrados,i) =>{
            cuadrados.addEventListener("click", () =>{
                
                cuadrados.innerText = player.simbol;

            })
        })
    }
    return{mark}

})();


