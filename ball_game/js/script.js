const ball = document.getElementById('ball');
const body = document.querySelector('body');

document.addEventListener('mousemove', (e) => {
    ball.style.top = e.pageY - ball.clientHeight / 2 + 'px';
    ball.style.left = e.pageX - ball.clientWidth / 2 + 'px';
});

document.addEventListener('click', (e) => {
    let dot = document.createElement('div');
    dot.id = "dot"
    let posX = e.clientX;
    let posY = e.clientY;
    dot.style.top = posY - 30 + 'px';
    dot.style.left = posX - 30 + 'px';
    body.appendChild(dot)
});