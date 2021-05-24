const http = require('http');
const fs = require('fs');

const port = 3000;

const htmlServed = fs.readFileSync('test.html', 'utf8');

const server = http.createServer( function(request, response) {
	// I want to analyze a request because I'm not exactly what happens
	// when an http request happens.

	const {method, url} = request;
	const {headers} = request;
	const userAgent = headers['user-agent']

	console.log('request method: ' + method);
	console.log('request url: ' + url);

	response.statusCode = 200;
	response.setHeader('Content-Type', 'text/html');
	response.write(htmlServed);
	response.end();
});

server.listen(port, () => {
	console.log('Server running at port ' + port);
})
