## The Setup (Crucial for the Practical)
- Before writing the code, open your terminal in your project folder and run these two commands:

```bash
npm init -y
```
(This creates a package.json file to manage your project).
```
npm install express
```
(This actually downloads the Express framework into a node_modules folder).

---

## How to Execute It
- Run the server in your terminal:

```Bash
node app.js
```
- Test Route 1: Open your browser and go to http://localhost:3000. You will see the standard welcome message.

- Test Route 2: Change the URL to http://localhost:3000/student/Swarup (or any other name). The browser will display the structured JSON object containing the name you typed into the URL.
