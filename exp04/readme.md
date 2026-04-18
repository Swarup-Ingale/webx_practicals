How to Execute It in the Practical
Open your Command Prompt or terminal and navigate to the folder where you saved app.js.

Run the file using Node by typing:

Bash
node app.js
You will see the message: Server is running at http://localhost:3000/ in your terminal.

The Proof: Open your web browser (Chrome, Edge, etc.) and type http://localhost:3000 in the address bar. You should see your "Hello World" message printed on the screen!

Detailed Breakdown (For Your Viva)
Examiners love to ask about the specific parameters in this code. Here is exactly how to explain it:

require('http'): Node.js doesn't have a visual interface like a browser; it runs on the operating system. To make it communicate over the web, we have to import its built-in http module. This gives us the tools to handle web traffic.

createServer((req, res)): This is the heart of the app. It creates the server and sets up a "callback function" that triggers every single time someone visits the website.

req (Request): This object contains everything the user is asking for (e.g., the URL they visited, their browser info).

res (Response): This object is what we use to send data back to the user.

res.writeHead(200, ...): This is the HTTP status code. 200 means "OK" (successful). We also tell the browser, "Hey, the data I'm sending you is just plain text, not HTML."

res.end(...): This command does two things at once: it sends the final "Hello World" text to the user's screen, and then it cleanly closes the connection so the server isn't left hanging.

server.listen(3000): A server is useless if it isn't listening for visitors. This tells our Node.js app to stand by and monitor port 3000 on the computer for any incoming web traffic
