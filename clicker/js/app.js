const body = document.querySelector('body');
const num_score = document.querySelector('.num_score');
const clicks = document.querySelector('span');
const btn = document.getElementById('clicker');
let game_score = 0;
let left_score = 40;

let colors = ['#ffd615', '#2cb978', '#3e3636', '#ace7ef', '#a56cc1', '#fcb1b1', '#071a52', '#88bef5', '#21e6c1']

btn.addEventListener('click', () => {
    game_score++;
    left_score--;
    num_score.innerHTML = game_score;
    clicks.innerHTML = left_score;
    if (game_score % 5 == 0) {
        changeColor()
    }
    if(game_score === 40) {
        body.innerHTML = `<div id="text"><h1 class="final_text">Congratulations! Your score is ${game_score}! &#128512;</h1>
                                        <button class="back" onclick="location.reload()">Back to main page</button></div>`
    }
});
function changeColor() {
    let color = colors.pop()
    body.style.backgroundColor = color;
}