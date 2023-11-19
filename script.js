console.log("welcome to tic tac toe");
let music = new Audio("background.mp3")
let audioTurn = new Audio("Touch.mp3")
let gameover = new Audio("gameOver.mp3")
let turn ="X"
let isgameover = false;

// function to chanege the turn 
const changeTurn = () =>{
    return turn === "X"? "O": "X"
}
//function to cheak for a win
const checkWin = ()=>{
    let boxText = document.getElementsByClassName("boxText");


    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{

        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " WON "
            isgameover = true
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "180px"
            gameover.play()
        }
    })
}
//game logic
music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', ()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
           turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        } 
    })
})
//add onclick listener to reset buttun
reset.addEventListener('click', ()=>{
    let boxText = document.querySelectorAll('.boxText');
    Array.from(boxText).forEach(element =>{
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px"
})