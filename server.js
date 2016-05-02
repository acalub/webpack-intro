var static      = require('node-static'),
    path        = require('path'),
    file        = new static.Server('./public', {cache: false}),
    port        = 8081;

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(port);
console.log("Server running on port %s", port);
