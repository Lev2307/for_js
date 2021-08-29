const sec = document.querySelector('.countdown-cont');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const birthdayDate = new Date('November 13, 2021 23:10:00');

function countDownTimer() {
    const nowDate = new Date();
    let totalSeconds = (birthdayDate - nowDate) / 1000;
    let distance = birthdayDate - nowDate;

    let daysEl = Math.floor(totalSeconds / 3600 / 24);
    let hoursEl = Math.floor(totalSeconds / 3600) % 24;
    let minutesEl = Math.floor(totalSeconds / 60) % 60;
    let secondsEl = Math.floor(totalSeconds) % 60;
    
    days.innerHTML = daysEl;
    hours.innerHTML = hoursEl;
    minutes.innerHTML = minutesEl;
    seconds.innerHTML = secondsEl;

    if(distance < 0) {
        const headline = document.getElementById("text");
        const new_headline = document.getElementById("new_title");
        const content = document.getElementById("content");

        headline.style.display = 'none';
        new_headline.style.display = 'block';
        sec.style.display = "none";
        content.style.display = "flex";
        content.style.flexDirection = "column";
        content.style.justifyContent = "center";
        content.style.alignItems = "center";
    }
}

setInterval(countDownTimer, 1000);