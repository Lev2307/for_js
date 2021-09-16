const text = document.getElementById('text');
const par_text = document.getElementById('par_text');
const parallax_cont = document.getElementById('parallax_cont');
const line = document.querySelector('.line');
let size = parallax_cont.clientHeight;
let line_pos = line.offsetLeft;
let text_pos = text.offsetTop;
let par_text_pos = par_text.offsetTop;

document.addEventListener('scroll', (e) => {
    let scrollY = window.scrollY;
    line.style.left = line_pos + scrollY * 0.4 + 'px';
    text.style.top = scrollY * 0.2 + 'px';
    par_text.style.top = -scrollY * 0.3 + 'px';
    console.log(text_pos)
});