# What is this document?  

I thought that it would be a good idea to date my progress with this 
document in the form of a dated log. Kinda like a project diary, yeah that 
sounds cute. So below what you will find is every date listed that I work 
on the project, some information that I may want to look back at later,
and maybe also a todo list that I had for that day of
working on roll3d20. The entries will be listed in chronological order from
most recent log to the oldest log because its easier for me that way.  

## 5/25/2021 - To js, or not to js, that is the question...  
So today I got a small threejs app served to my client by the server that I was
working on, however I realized that my javascript knowledge is small, similar
to the size of my brain for thinking this would be an easy project to just pick
up and learn javascript with... The server works just fine (though with some 
warnings from the console), but I realized that at least the way I have been
doing my testing, this is not scalable, like at all. The problem being that
everytime the client needs something, I have it hard coded into the server that
the server will serve the client what it needs. For example, the first request
a client makes is the first html file, and my server then serves it that html
file, then the html comes across a link to a css page, which the client then
requests from the server, and the server hapily serves. Then the html comes
across a link to another file, which is the js that runs the webapp, and
requests that from the server as well.
To most anyone who has familiarity with coding I think that they will understand
how bad that is.
If the server has to know exactly every file the client will need, and needs to
have hard coded lines to serve the exact files, then this server is only
good for one web app. Now if its just a test server yeah thats fine, I was
using the test server to kinda learn how the js backend would work, however, I
want to write good code, scalable code, BEAUTIFUL CODE. Well let me tell you,
this code is not any of those things. The fact that the only way to serve
content is that it has to to be hard coded is a death sentence for this project
and I think its partly because of my lack of mastery of javascript. But this is
okay, beacuse there are multiple ways to build a backend. So I fear not, for
python shall always be there for me in my time of need. I am thinking of maybe
transitioning to using python to build my backend. I did some reading and I
think it first off would help way more to be working in a language I understand
and already have some proficency in, and second would give me some ease of mind
to not have to worry about my crappy javascript code. Regardless I did learn
a lot starting this project in javascript. It forced me to learn a lot of things
through debugging, and figuring out exactly the structure of an http request,
and how URL's work. So for that I'm glad I stumbled and fell a little here, but
now its time for me to get back up, grab a snake and start running with it.

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

After reading up about HTTP I have a lot better idea about how these requests 
work and how file systems on these types of servers/databases should work. Next time I work on this I'm going to look into how to make my nodejs look a little
better and see if I can't get a web app running on my small test server.
