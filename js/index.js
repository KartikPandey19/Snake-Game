let direction = {x:0, y:0};
const  foodSound = new Audio("food.mp3");
const  gameOverSound = new Audio("gameover.mp3");
const moveSound = new Audio("move.mp3");
const musicSound = new Audio("music.mp3");
let speed = 2;
let lastPaintTime=0;
let snakeArr=[
    {x:13,y:15}
]

// Game Functions
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-lastPaintTime)/1000<1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
    }
    function gameEngine(){
    board.innerHtml = "";
    snakeArr.forEach((e,index)=>{
    //   27:41
    })
    }
    

// Game Logic
window.requestAnimationFrame(main);