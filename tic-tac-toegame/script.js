console.log("welcome to tic tac toe game");
let music=new Audio("music.mp3");
let audioturn=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let turn ="X";
let isgameover=false;


//you should have hands on experience on javascirpt 
//
const changeTurn =()=>{
    // here we are using arrow functions
    //her for simpler code we can also use ternaryu operator
    return turn==="X"?"0":"X"
}


//function to check win
//3 triplet should be ther in diagonal
//after each time
const checkWin=()=>{
    //here you list down all possiblitues in matrix
    //that can lead to win to a pritclau player
    let boxtext=document.getElementsByClassName('boxtext');


    //here a mathematical logic 
    //need to implemented using js
    let wins=[
        [0,1,2,5,15,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,5,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
    ]


    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) &&(boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=="")){

        
        document.querySelector('.info').innerText=boxtext[e[0]].innerText+"won"
        isgameover=true
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
        //jaise hi koi player win karege will we transform our so formedline
        document.querySelector(".line").style.transform=`translate(${e[3]}vw ,${e[4]}vw) rotate(${e[5]}deg)`
        document.querySelector(".line").style.width="20vw";
        //
        
        }
        //note is variable ke change hone ka impact kahan kahan padna chahiye 

    })
    //check winning after each turn
    //reset game
    //show winning gif


}


//main logic 
//game logic
//konse buttton par event  listener
// music.play();


let boxes=document.getElementsByClassName("box");
//we will put an event listener on each box 
//we need  to use array.from 
//because it will be returning an html collections

Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    //note that boxtext refer to the span text inside that div 
    //that we are selction using query selector
    //har boxtext pe event listner
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText==''){
            boxtext.innerText=turn;
           turn= changeTurn();

            //note that jab turn change hogi then we will play music
            audioturn.play();
            checkWin();
            //here our main code flow is there
            if(!isgameover){

            
            document.getElementsByClassName("info")[0].innerText="turn for"+turn;
            }
        }
    })

})
//

//now we will be adding event listgner 
//on click to reset button
//note that is event listener ke corresponding ek arrow  function will be fired

reset.addEventListener('click',(e)=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=" "
    });
    turn="X";
    isgameover=false;
    //reset means game has been over now it should reset itself
    document.querySelector(".line").style.width="0vw";

    document.getElementsByClassName("info")[0].innerText="turn for"+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"


    if(!isgameover){

    }

})
