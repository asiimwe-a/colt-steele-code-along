const p1button = document.querySelector('#p1button')
const p2button = document.querySelector('#p2button')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const resetButton = document.querySelector('#rbutton')
const playTo = document.querySelector('#playto')

let p1score=0;
let p2score=0;
let winningScore=3;
let isGameOver = false;

p1button.addEventListener('click',()=>{
    if(!isGameOver){
        p1score+=1;
        if(p1score===winningScore){
            isGameOver=true;
            p1Display.classList.add('winner')
            p2Display.classList.add('loser')
            p1button.disabled = true;
            p2button.disabled = true;
        }
        p1Display.textContent=p1score;
    }
})

p2button.addEventListener('click',()=>{
    if(!isGameOver){
        p2score+=1;
        if(p2score===winningScore){
            isGameOver=true;
            p2Display.classList.add('winner')
            p1Display.classList.add('loser')
            p1button.disabled = true;
            p2button.disabled = true;
        }
        p2Display.textContent=p2score;
    }
})

resetButton.addEventListener('click', reset)

function reset() {
    p1score=0;
    p2score=0;
    isGameOver=false;
    p1Display.textContent=0;
    p2Display.textContent=0;
    p1Display.classList.remove('winner', 'loser')
    p2Display.classList.remove('loser', 'winner')
    p1button.disabled = false;
    p2button.disabled = false;
}

playTo.addEventListener('change', function(){
    winningScore=parseInt(this.value)
    reset()
})

// REFACTORED CODE SIMILAR TO ABOVE (above is more simple to understand)
// const p1 = {
//     score: 0,
//     button: document.querySelector('#p1Button'),
//     display: document.querySelector('#p1Display')
// }
// const p2 = {
//     score: 0,
//     button: document.querySelector('#p2Button'),
//     display: document.querySelector('#p2Display')
// }

// const resetButton = document.querySelector('#reset');
// const winningScoreSelect = document.querySelector('#playto');
// let winningScore = 3;
// let isGameOver = false;

// function updateScores(player, opponent) {
//     if (!isGameOver) {
//         player.score += 1;
//         if (player.score === winningScore) {
//             isGameOver = true;
//             player.display.classList.add('has-text-success');
//             opponent.display.classList.add('has-text-danger');
//             player.button.disabled = true;
//             opponent.button.disabled = true;
//         }
//         player.display.textContent = player.score;
//     }
// }


// p1.button.addEventListener('click', function () {
//     updateScores(p1, p2)
// })
// p2.button.addEventListener('click', function () {
//     updateScores(p2, p1)
// })


// winningScoreSelect.addEventListener('change', function () {
//     winningScore = parseInt(this.value);
//     reset();
// })

// resetButton.addEventListener('click', reset)

// function reset() {
//     isGameOver = false;
//     for (let p of [p1, p2]) {
//         p.score = 0;
//         p.display.textContent = 0;
//         p.display.classList.remove('has-text-success', 'has-text-danger');
//         p.button.disabled = false;
//     }
// }

       


