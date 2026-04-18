// implementation of Buffer and Stream in node.js

// Import the File System module (needed for Streams)
const fs = require('fs');

// ==========================================
// PART 1: BUFFER IMPLEMENTATION
// ==========================================
console.log("--- Buffer Implementation ---");

// Create a buffer from a string
const myBuffer = Buffer.from("Cybersecurity Practical", "utf-8");

// Print the raw binary/hex data
console.log("Raw Buffer data (Hex):", myBuffer);

// Convert the binary back to a readable string
console.log("Converted back to String:", myBuffer.toString());


// ==========================================
// PART 2: STREAM IMPLEMENTATION
// ==========================================
console.log("\n--- Stream Implementation ---");

// 1. Create a readable stream to read from 'input.txt'
const readStream = fs.createReadStream('input.txt', 'utf8');

// 2. Create a writable stream to write to a new file called 'output.txt'
const writeStream = fs.createWriteStream('output.txt');

// 3. Pipe the read stream directly into the write stream
readStream.pipe(writeStream);

console.log("Streaming complete! Check your folder for 'output.txt'.");
