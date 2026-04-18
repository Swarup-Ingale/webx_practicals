// Configuring Express Settings and creating Express application using request and response objects.

// 1. Import and initialize Express
const express = require('express');
const app = express();

// ==========================================
// PART 1: CONFIGURING EXPRESS SETTINGS
// ==========================================

// Setting custom application variables (Configuration)
app.set('port', 3000); 
app.set('env', 'development'); 

// Configuring middleware so Express can read JSON data sent in requests
app.use(express.json()); 


// ==========================================
// PART 2: USING REQUEST (req) AND RESPONSE (res)
// ==========================================

// Route 1: A basic GET request showing res.send()
app.get('/', (req, res) => {
    // res.send() automatically detects it's text and sends it to the browser
    res.send('Welcome to the Express Practical!');
});

// Route 2: Demonstrating route parameters with req.params and res.json()
app.get('/student/:name', (req, res) => {
    // The 'req' object extracts the dynamic part of the URL
    const studentName = req.params.name;

    // The 'res' object sets the status code and sends formatted JSON data
    res.status(200).json({
        message: "Student data successfully retrieved",
        student: studentName,
        course: "Web-X"
    });
});

// ==========================================
// PART 3: STARTING THE SERVER
// ==========================================

// We use the 'port' setting we configured earlier
app.listen(app.get('port'), () => {
    console.log(`Express app running on http://localhost:${app.get('port')}`);
});
