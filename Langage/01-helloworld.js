console.log('Bonjour');

function helloworld() {
    console.log('Hello');
}

var id = setInterval(helloworld, 1000);

setTimeout(function() {
    console.log('Bye');
    clearInterval(id);
}, 3000);