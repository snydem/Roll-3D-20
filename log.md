# What is this document?

I thought that it would be a good idea to date my progress with this 
document in the form of a dated log. Kinda like a project diary, yeah that 
sounds cute. So below what you will find is every date listed that I work 
on the project, some information that I may want to look back at later,
and maybe also a todo list that I had for that day of
working on roll3d20. The entries will be listed in chronological order from
most recent log to the oldest log because its easier for me that way.

## 5/24/2021 - How to HTTP
With the project today, I realized I know not very much about HTTP requests
and how to serve webpages to a client. Not only that but I realized the
logic for my app which the server runs may get increasingly complicated
as I want to have multiple people connect up to one session at a time.
There are some things on base roll20 that I don't think I will implement
in my rendition to 3d, like the voice and video chat. I feel like in a
3d roll 20 your character is more the face you would want to show anyway
also that reduces a level of complexity to this project which I think is
good. Regardless I'll have a very small todo list for the day:
	- learn how HTTP runs and operates
	- learn how servers interact with clients
	- try to build up the base for a scalable backend with nodejs.

So here I wanted to list snome notes about how to use and operate in an
HTTP based project:

### HTTP/backend architecure NOTES:
Simply lets just start with some definitions. I am reading and taking
notes from https://codecademy.com/articles/back-end-architecture :
	- Back-end: the back-end is all of the tech required to process
		the incoming request and generate and send the response
		to the client. this encompasses 3 major parts: The server
		(the machine that recieves the requests), the app (this
		is the application running on the server that listens
		for requests, retrieves information, and sends a resopnse),
		and the database (organize and persits data).
	- Server: A server is just a machine that is designed to listen
		for incoming requests. Any computer connected to a network
		can act as a server.
	- HTTP Verb: the request methods to indicate the desired action to 
		be performed for a given resource. e.g. GET, POST, PUT, etc
	- URI (uniform resource identifier): A string that refers to a
		resource. most common are URLs which identify the resource
		by giving its location on the web.
	- App: The server runs an app. This app contains logic about how to
		respond to various requests based on the **HTTP verb** and
		**Uniform Resource Identifier (URI)**. and HTTP verb and URI
		together are a pair called a route, and matching them based
		on a request is called routing. These requests are handled
		by middleware (any code executed between the server
		recieving a request and sending a response).
	- API: A collection of clearly defined methods of communication
		between different software components. More specifically
		a Web API is the interface created by the back-end: the
		collection of endpoints and the resources these endponts
		expose.

So how does a request work. Well lets say you click on some random http
link for a website. Well that click event makes a GET request to the URL
you clicked. The GET request asks for data of some kind and the server and
database then work together to get and send that data back to the client.

