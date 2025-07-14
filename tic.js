let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgbtn = document.querySelector("#New-game");
let msgcontainer = document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
let count=0;
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
   // console.log("box was clicked");
    if(turnO){
        box.innerText="O";
        turnO=false;
        count=count+1;
    }
    else{
        box.innerText="X";
        turnO=true;
        count=count+1; 
    }
    box.disabled="true";
    checkwinner();
    if(count===9){
        drawmatch();
       }
   })
})
const enable = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        
       
    }
}
const disable = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner = (winner)=>{
    msg.innerText = `Congratulation, Winner is ${winner} .`;
  msgcontainer.classList.remove("hide");
  disable();
}
const drawmatch = ()=>{
       msg.innerText = "Draw! The match ends with no winner. Play again.";
       msgcontainer.classList.remove("hide");

}

const checkwinner=()=>{
    for(let pattern of win ){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
     
       
        if(pos1 !="" && pos2 !="" && pos3 !="") {
        if(pos1===pos2 && pos2===pos3){
           // console.log("winner."," ",pos1);
            showWinner(pos1);
              
        }
       }
       
    }
}
const resetgame = (reset)=>{
    turnO=true;
    enable();
    msgcontainer.classList.add("hide");
    count=0;
}
resetbtn.addEventListener("click",resetgame);
newgbtn.addEventListener("click",resetgame);