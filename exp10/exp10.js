// Build a REST-ful API(CRUD) using MongoDB.

const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); // Middleware to parse incoming JSON data

// ==========================================
// 1. DATABASE CONNECTION & SCHEMA
// ==========================================

// Connect to local MongoDB (creates database 'webx_exam' automatically)
mongoose.connect('mongodb://127.0.0.1:27017/webx_exam')
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch((err) => console.error('Connection error:', err));

// Define the blueprint (Schema) for our data
const studentSchema = new mongoose.Schema({
    name: String,
    course: String
});

// Compile the schema into a Model
const Student = mongoose.model('Student', studentSchema);


// ==========================================
// 2. RESTful API ROUTES (CRUD)
// ==========================================

// CREATE (POST): Add a new student
app.post('/api/students', async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (err) {
        res.status(400).json({ error: "Failed to add student" });
    }
});

// READ (GET): Fetch all students
app.get('/api/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

// UPDATE (PUT): Update an existing student by their MongoDB ID
app.put('/api/students/:id', async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true } // Returns the updated document instead of the old one
        );
        res.status(200).json(updatedStudent);
    } catch (err) {
        res.status(400).json({ error: "Failed to update" });
    }
});

// DELETE (DELETE): Remove a student by their MongoDB ID
app.delete('/api/students/:id', async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Student deleted successfully" });
    } catch (err) {
        res.status(400).json({ error: "Failed to delete" });
    }
});

// ==========================================
// 3. START SERVER
// ==========================================
app.listen(3000, () => {
    console.log('API running at http://localhost:3000');
});
