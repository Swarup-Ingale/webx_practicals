//Build Hello World App in Node.js


// 1. Import the built-in HTTP module
const http = require('http'); //from http import http 

// 2. Create the server
const server = http.createServer((req, res) => {
    // Set the HTTP response header (Status 200 = OK, Content-Type = plain text)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Send the response body and end the connection
    res.end('Hello World, from Node.js!\n');
});

// 3. Start the server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});
