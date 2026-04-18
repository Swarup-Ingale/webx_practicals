// Create Restful APi using Mongodb, nodejs, angularjs and typescript


// The Backend (TypeScript + Node + MongoDB)

// server.ts
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import path from 'path';

const app = express();

// Middleware
app.use(express.json()); // Parse JSON data
app.use(express.static(path.join(__dirname, 'public'))); // Serve the frontend HTML

// 1. Database Connection
mongoose.connect('mongodb://127.0.0.1:27017/webx_final')
    .then(() => console.log('MongoDB Connected!'))
    .catch((err) => console.log('DB Error:', err));

// 2. TypeScript Interface & Mongoose Schema
// The Interface provides strict typing for TypeScript
interface IStudent {
    name: string;
    course: string;
}

// The Schema provides structure for MongoDB
const studentSchema = new mongoose.Schema<IStudent>({
    name: { type: String, required: true },
    course: { type: String, required: true }
});

const Student = mongoose.model<IStudent>('Student', studentSchema);

// 3. REST API Routes
// GET: Fetch all students
app.get('/api/students', async (req: Request, res: Response) => {
    const students = await Student.find();
    res.json(students);
});

// POST: Add a new student
app.post('/api/students', async (req: Request, res: Response) => {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.json(newStudent);
});

// 4. Start Server
app.listen(3000, () => {
    console.log('Full-Stack App running at http://localhost:3000');
});
