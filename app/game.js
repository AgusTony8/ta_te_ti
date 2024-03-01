// board Factory as a IIFE----------------------------------------------------------
const gameBoard = (function() {
    //getting all the tiles on the board 
    const square = document.querySelectorAll(".casilla")
    
    function someoneWon(){
        const squareValueArr = Array.from(square).map(sq => sq.textContent)
        console.log('squareValueArr:', squareValueArr)
        
        // row control
        for (let i = 0; i < 9; i+=3) {
            if(squareValueArr[i] && 
                (squareValueArr[i] === squareValueArr[i+1]) &&
                (squareValueArr[i] === squareValueArr[i+2])
                ){
                    return ([i,i+1,i+2]);
                }
        }
        // column control
        for (let i = 0; i < 3; i++) {
            if(squareValueArr[i] && 
                (squareValueArr[i] === squareValueArr[i+3]) && 
                (squareValueArr[i] === squareValueArr[i+6])){
                return ([i,i+3,i+6]);
            }
        }

        // diagonal control
        if(squareValueArr[0] &&
            (squareValueArr[0] === squareValueArr[4]) && 
            (squareValueArr[0] === squareValueArr[8])) return [0,4,8];
        if(squareValueArr[2] && 
            (squareValueArr[2] === tablero[4]) && 
            (squareValueArr[2] === tablero[6])) return [2,4,6];

        //tie control
        if(squareValueArr.includes("")) return false;
        return "Tie";
        }
    const mark = (player) =>{
        square.forEach((cuadrados,i) =>{
            cuadrados.addEventListener("click", () =>{
                cuadrados.innerText = player.simbol;
                console.log('someoneWon:', someoneWon());

            })
        })
    }


    return{mark}

})();

gameBoard.mark(a)


//game state factory----------------------------------------------------------

function createGame(gb){
    const p1 = {simbol: "X"}
    const p2 = {simbol: "O"}
    const turn = 0
    function makeMove(){
        
    }

}