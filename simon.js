let userSeq=[];
let gameSeq=[];
let colors=["red","yellow","pink","blue"];
let started=false;
let level=0;
let highscore=0;
let currscore=0;
let heading=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){

    
    console.log("game started");
    started=true;
    levelUp();
    
    }
})
function flashbtn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
    
}

function levelUp(){
    userSeq=[];
    level++;
    heading.innerText=`Your level is : ${level}`;
    let randIdx=Math.floor(Math.random() * 4);
    let randcolor=colors[randIdx];
    gameSeq.push(randcolor);
    console.log(gameSeq);
    let randbtn=document.querySelector(`.${randcolor}`);
    flashbtn(randbtn);  
}
function buttonclick(){
    let btn_press=this;
    userflash(btn_press);
    let usercolor=btn_press.innerText;
    console.log(usercolor);
    userSeq.push(usercolor);
    verify(userSeq.length-1);
    
}
let bpress=document.querySelectorAll("#btn");
for(bpresses of bpress){
    bpresses.addEventListener("click",buttonclick);
    
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")},250)
    
}
function verify(i){
    let idx=i;
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
        setTimeout( function(){levelUp()},2000);
        currscore+=5;
    }
    
    }else{
        heading.innerText=`Game over Your level is ${level} Press any key to restart !..`;
       document.querySelector("body").style.backgroundColor="red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
       },250)
       if(currscore>highscore){
        highscore=currscore;
        let hscore=document.createElement("h3");
        hscore.innerText=`High score till now is ${highscore} and current score is ${currscore}`;
        document.querySelector(".heading3").appendChild(hscore);
       }
       else{
        let hscore=document.createElement("h3");
        hscore.innerText=`High score till now is ${highscore} and current score is ${currscore}`;
        document.querySelector(".heading3").appendChild(hscore);
       }
        reset();
    }
}
function reset(){
    currscore=0;
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}
