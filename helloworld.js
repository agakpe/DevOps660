var http = require("http")

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'})

   // Send the response body as "Hello World"
   response.end(The invasion of the vampire tribe. 'Mamaaa! The world is full of vampires camouflaged. \n Where are all the people? ')
}).listen(3333)

// Console will print the message
console.log('Server running')
