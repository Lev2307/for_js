const btn = document.querySelector('button');
const section = document.querySelector('section');
let gamestatus = false

btn.addEventListener('click', () => {
    if(!gamestatus) {
        gamestatus = true
        likeEvent(gamestatus)
    } else {
        gamestatus = false
        likeEvent(gamestatus)
    }
});

let setInt = setInterval(clickMe, 2000);
let removeInt = setInterval(removeClick, 3000);

function likeEvent(gamestatus) {
    if(gamestatus) {
        console.log(gamestatus)
        btn.style.background = 'lightgreen'
        document.addEventListener('mousemove', moveEvent);
        btn.className = ''
        clearInterval(setInt);
        clearInterval(removeInt);
    } else {
        console.log(gamestatus)
        btn.style.background = 'rgb(255, 255, 44)'
        document.removeEventListener('mousemove', moveEvent);
        let setInt = setInterval(clickMe, 2000);
        let removeInt = setInterval(removeClick, 3000);
    }
}

function moveEvent(event) {
    let x = event.clientX;
    let y = event.clientY;
    let heart = document.createElement('span');
    heart.classList.toggle('heart');
    // pos heart
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    // random heart`s size
    let size = Math.random() * 100;
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';

    setInterval(delHeart, 1500, heart)
    section.appendChild(heart)
}

function delHeart(h) {
    h.remove('heart')
}
function clickMe() {
    btn.className = 'click'
}
function removeClick() {
    btn.classList.remove('click')
}