## The Setup (Crucial Step)
Before writing the code, ensure you install both Express and the cookie parser in your terminal:

```Bash
npm install express cookie-parser
```

--- 

## How to Execute It in the Practical
- Run the server:
```
node app.js
```
- Open your browser and visit: http://localhost:3000/get-cookie. It will say no cookie is found.

- Visit: http://localhost:3000/set-cookie. The browser will save the cookie silently in the background.

- Visit http://localhost:3000/get-cookie again. This time, it will successfully read the "In Progress" value!
