const body = document.querySelector('body');
const destination = document.querySelector('#destination');
const security = document.querySelector('#security');


destination.addEventListener('click', () => {
    if (screen.width > 700) {
        window.location.href = 'destination2.html';
    }
    else {
        window.location.href = 'destination.html';
    }
})

security.addEventListener('click', () => {
    window.location.href = 'security.html';
})
