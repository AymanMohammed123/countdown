const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')

const currentYear = new Date().getFullYear();
const Anniversary = new Date(`July 31, ${currentYear} 00:00:00`);

function updateCountdown() {
    const currentTime = new Date();
    const timeDifference = Anniversary - currentTime;
    
    if (timeDifference > 0) {
        const d = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const h = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((timeDifference % (1000 * 60)) / 1000);

        days.innerHTML = d;
        hours.innerHTML = h < 10 ? '0' + h : h;
        minutes.innerHTML = m < 10 ? '0' + m : m;
        seconds.innerHTML = s < 10 ? '0' + s : s;
    } else {
        // Handle when the date has passed
        days.innerHTML = '0';
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';
    }
}

// Run once immediately, then every second
updateCountdown();
setInterval(updateCountdown, 1000)

function hearts(){
    const container = document.querySelector('.container');
    const creat = document.createElement('div');
    creat.classList.add('heart');
    creat.innerHTML= '❤️';

    creat.style.left = Math.random() * 100 + 'vw';
    creat.style.animationDuration = Math.random() * 2 + 3 + 's';
    
    container.appendChild(creat);
    console.log(creat);

}

setInterval(hearts, 1000);