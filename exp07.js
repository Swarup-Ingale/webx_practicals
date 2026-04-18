// Build Express application by Sending and Receiving Cookie

// 1. Import modules
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// 2. Configure the middleware
app.use(cookieParser()); // Tells Express to parse incoming cookies

// ==========================================
// PART 1: SENDING (SETTING) A COOKIE
// ==========================================
app.get('/set-cookie', (req, res) => {
    // res.cookie(name, value, [options])
    res.cookie('examStatus', 'In Progress', { 
        maxAge: 60000, // Cookie expires in 60,000 milliseconds (1 minute)
        httpOnly: true // Security feature: prevents client-side JS from reading it
    });
    
    res.send('Cookie has been sent and saved in your browser!');
});

// ==========================================
// PART 2: RECEIVING (READING) A COOKIE
// ==========================================
app.get('/get-cookie', (req, res) => {
    // req.cookies is an object containing all cookies sent by the browser
    const myCookie = req.cookies.examStatus;

    if (myCookie) {
        res.send(`Successfully received cookie: ${myCookie}`);
    } else {
        res.send('No cookie found. It might have expired or was never set.');
    }
});

// ==========================================
// PART 3: CLEARING A COOKIE (Bonus)
// ==========================================
app.get('/clear-cookie', (req, res) => {
    res.clearCookie('examStatus');
    res.send('Cookie has been deleted!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
