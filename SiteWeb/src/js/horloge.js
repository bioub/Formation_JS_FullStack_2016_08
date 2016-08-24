var divHorloge = document.querySelector('#horloge');

function update() {
    var now = new Date();
    divHorloge.innerHTML = now.getHours() + 'h' +
                           now.getMinutes() + 'm' +
                           now.getSeconds() + 's';
}

setInterval(update, 1000);