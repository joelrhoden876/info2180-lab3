window.onload = function(){
    let board = document.getElementById("board");
    let squares = document.querySelectorAll("#board div");

    for (let s in squares){
        squares[s].classList.add("square");
    }
}

//div.className = "square";