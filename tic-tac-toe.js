
window.onload = function(){
    const board = document.getElementById("board");
    let status = document.getElementById('status');
    const newGame = document.getElementById("btn");
    const squares = document.querySelectorAll("#board div");
    let box = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
    let currentPlayer = "X";
    let X = true;

    
    const updateBox =  (index) => {
        box[index] = currentPlayer;
    }

    const changePlayer = () => {
        if (currentPlayer == "X"){
            currentPlayer = "O";
        }
        else{
            currentPlayer = "X";
        }
    }

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';

    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const a = box[winCondition[0]];
            const b = box[winCondition[1]];
            const c = box[winCondition[2]];
            if (a === ' ' || b === ' ' || c === ' ') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

    if (roundWon) {
            announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
            X = false;
            return;
        }

    if (!box.includes(' '))
          announce(TIE);
    }

    const announce = (type) => {
        switch(type){
            case PLAYERO_WON:
                status.innerHTML = "Congratulations! X is the Winner!";
                break;
            case PLAYERX_WON:
                status.innerHTML = "Congratulations! O is the Winner!";
                break;
             case TIE:
                 status.innerText = 'Tie';
        }
        status.setAttribute("class","you-won");
    };


    const userAction = (squares, index) => {
        if(X) {
            squares.innerHTML = currentPlayer;
            squares.classList.add(currentPlayer);
            updateBox(index);
            changePlayer();
            handleResultValidation();
        }
    }

    squares.forEach( (squares, index) => {
        squares.addEventListener('click', () => userAction(squares, index));
        
        
    });

    for (let s in squares){
        squares[s].classList.add("square");
        //squares[s].setAttribute("class","square");
        
    }


    const resetBoard = () => {
        box = ['', '', '', '', '', '', '', '', ''];
        X = true;
        status = document.getElementById('status');

        if (currentPlayer === 'O') {
            changePlayer();
        }

        squares.forEach(squares => {
            squares.innerText = ' ';
            squares.classList.remove('playerX');
            squares.classList.remove('playerO');
        });
    }


    newGame.addEventListener('click', resetBoard());

}

