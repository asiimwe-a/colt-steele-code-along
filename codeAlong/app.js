const p1button = document.querySelector('#p1button')
const p2button = document.querySelector('#p2button')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const resetButton = document.querySelector('#rbutton')
const playTo = document.querySelector('#playto')

let p1score=0;
let p2score=0;
let winningScore=5
let isGameOver = false;

p1button.addEventListener('click',()=>{
    if(!isGameOver){
        p1score+=1;
        if(p1score===winningScore){
            isGameOver=true;
        }
        p1Display.textContent=p1score;
    }
})

p2button.addEventListener('click',()=>{
    if(!isGameOver){
        p2score+=1;
        if(p2score===winningScore){
            isGameOver=true;
        }
        p2Display.textContent=p2score;
    }
})

resetButton.addEventListener('click', ()=>{
    p1score=0;
    p2score=0;
    isGameOver=false;
    p1Display.textContent=0;
    p2Display.textContent=0;
})

playTo.addEventListener('change', ()=>{
    alert('aaa')
})
       


