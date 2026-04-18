## The Setup (Crucial for TypeScript)
- You need to install the standard backend tools, plus the TypeScript compiler and type definitions.

- Open your terminal in a new project folder and run:
```
npm init -y
```
- Install the core packages:
```
npm install express mongoose
```
- Install the TypeScript tools:
```
npm install -D typescript ts-node @types/express @types/node
```
- Create a folder named public inside your project folder. (This is where your HTML file will go).

---

## How to Execute It in the Practical
- Make sure MongoDB is running on your computer.

- In your terminal, run the server using ts-node (this compiles and runs the TypeScript file in one command, saving you a ton of time in the exam):

```Bash
npx ts-node server.ts
```
- Open your browser and go to http://localhost:3000.

- The Proof: Because of the express.static line in our backend, Node.js automatically serves your AngularJS HTML page. You can type in the form, click "Register", and the AngularJS $http service will seamlessly talk to your TypeScript backend and save it to MongoDB!
