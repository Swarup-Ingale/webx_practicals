## The Setup (Crucial Step)
- we need to have MongoDB installed and running on your computer. Before writing code, open your terminal in your project folder and install Express and Mongoose:

```Bash
npm install express mongoose
```

---

## How to Execute It in the Practical
- Ensure your MongoDB service is running in the background.

- Run your file:
```
node server.js
```
- The Proof: Because you cannot easily send POST, PUT, or DELETE requests directly from a normal browser address bar (browsers default to GET), you will need to use a tool like Postman or Thunder Client (VS Code extension) to test it.

- To test POST, set Postman to POST, point it to http://localhost:3000/api/students, choose Body -> raw -> JSON, and send {"name": "Swarup", "course": "Cybersecurity"}.

- To test GET, point your normal browser to http://localhost:3000/api/students. You will see the array of students you just created pulled straight from the database.
