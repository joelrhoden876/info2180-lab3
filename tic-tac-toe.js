X = true;
window.onload = function(){
    let board = document.getElementById("board");
    let squares = document.querySelectorAll("#board div");
    //let X = "X";
    for (let s in squares){
        squares[s].classList.add("square");
        squares[s].setAttribute("class","square");
        squares[s].addEventListener("click", function(){
            if (X == true){
                squares[s].innerHTML = "X";
                squares[s].classList.add("X");
                X = false;
            }
            else{
                squares[s].innerHTML = "O";
                squares[s].classList.add("O");
                X = true;
            }
        })
        
    }
    
}

