const http = require('http');
const fs = require('fs');

const port = 3000;

const htmlServed = fs.readFileSync('mapRender.html', 'utf8');
const cssServed = fs.readFileSync('mapRender.css', 'utf8');
const jsServed = fs.readFileSync('mapRender.js', 'utf8');
const imageTexture = fs.readFileSync('Tavern.jpg', 'utf-8');

const server = http.createServer( function(request, response) {
	// I want to analyze a request because I'm not exactly what happens
	// when an http request happens.


	// Originally I was having an issue understanding the request url, but
	// now it makes sense. Because the request url is just requesting the
	// homepage, the only location is has to find, is the base location.
	// its like the root node of my file system, so its just requesting
	// the base point.
	const {method, url} = request;
	const {headers} = request;
	const userAgent = headers['user-agent']

	console.log('request method: ' + method);
	console.log('request url: ' + url);

	if (url === '/mapRender.html') {
		response.statusCode = 200;
		response.setHeader('Content-Type', 'text/html');	
		response.write(htmlServed);
	}
	else if (url === '/mapRender.css') {	
		response.statusCode = 200;
		response.setHeader('Content-Type', 'text/css');	
		response.write(cssServed);
	}
	else if (url === '/mapRender.js') {
		response.statusCode = 200;
		response.setHeader('Content-Type', 'application/javascript');	
		response.write(jsServed);
	}
	else if (url == '/Tavern.jpg') {
		response.statusCode = 200;
		response.setHeader('Content-Type', 'image/jpeg');	
		response.write(imageTexture);
	}
	response.end();
});

server.listen(port, () => {
	console.log('Server running at port ' + port);
})
