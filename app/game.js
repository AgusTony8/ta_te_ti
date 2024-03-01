// board Factory as a IIFE----------------------------------------------------------
function newGameBoard() {
    //getting all the tiles on the board 
    const square = document.querySelectorAll(".casilla")
    
    function clearBoard(){
        square.forEach((cuadrados,i) => {
            cuadrados.textContent = ''
            cuadrados.classList.remove("win")
        })
        document.querySelector(".winning-module").style.display = "none"
    }
    //restart game
    document.getElementById('restart').addEventListener('click', () =>{
        clearBoard();
    })
    

    //turn counter
    let turn = 0
    const nextTurn = () => turn++
    const getTurn = () => turn;
    function someoneWon(){
        const squareValueArr = Array.from(square).map(sq => sq.textContent)
        
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
            (squareValueArr[2] === squareValueArr[4]) && 
            (squareValueArr[2] === squareValueArr[6])) return [2,4,6];

        //tie control
        if(squareValueArr.includes("")) return false;
        return "Tie";
        }
    const mark = (player) =>{
        square.forEach((cuadrados,i) =>{
            cuadrados.addEventListener("click", () =>{

                //if a tie or someone won, the divs dosent respond any more
                if (someoneWon() !== false) {return}
                cuadrados.innerText = player.simbol;
            })
        })
    }


    return{mark, getTurn, nextTurn, square, someoneWon}

};



//game state factory----------------------------------------------------------

const game = (function (){

    const p1 = {simbol: "X"} //starts at turn 1 for some reason
    const p2 = {simbol: "O"} //starts at 2
    const gameBoard =  newGameBoard();

    function announceWinner(positions, turn){
        console.log('positions,turn:', positions,turn)
        positions.forEach(ps => gameBoard.square[ps].classList.toggle("win", true))
        document.querySelector(".winning-module").style.display = "block"
    }


    function makeMove(){
        console.log('gameBoard.getTurn():', gameBoard.getTurn())
        if ( (gameBoard.getTurn()%2) == 0) {
            gameBoard.mark(p1);
            
        }
        else{
             gameBoard.mark(p2)
        };
        //if there was a winner in this turn, we announce it
        if (gameBoard.someoneWon() !== false){
            announceWinner(gameBoard.someoneWon(), gameBoard.getTurn())
        };
        gameBoard.nextTurn();
        
    }

    //turn progretion
    gameBoard.square.forEach((cuadrados,i) =>{
        cuadrados.addEventListener("click", () =>{
            makeMove();
        })
    })

})();

