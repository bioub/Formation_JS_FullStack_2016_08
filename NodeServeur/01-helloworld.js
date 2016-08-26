'use strict';

const http = require('http');

let server = http.createServer(function(req, res) {
    switch (req.url) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Hello');
            break;
        case '/toto':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Toto');
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not Found');
    }

});

server.listen('8080');