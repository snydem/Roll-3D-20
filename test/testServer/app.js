/* A small server written with nodejs. This is being used as a test to see how
 * to write a nodejs server (which I'm planning to use as the backend
 * for my roll3d20 app) */

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var fs = require('fs');

var data = fs.readFileSync('test.html', 'utf8');

const server = http.createServer(function (request, response) {
	response.statusCode = 200;
	response.setHeader('Content-Type', 'text/html');
	response.write(data);
	response.end();
});

server.listen(port, hostname, () => {
	console.log('Server running at http://'+hostname+':'+port+'/');
});
