//Calculator 

function add (a: number, b:number): number {
    return a + b;

}

function sub (a: number, b:number): number {
    return a - b;

}

function mul (a: number, b:number): number {
    return a * b;

}

function div (a: number, b:number): number {
    return a/b;

}

let num1: number = 10
let num2: number = 20

console.log("addition : ", add(num1,num2));
console.log("subtraction : ", sub(num1,num2));
console.log("multiplication : ", mul(num1,num2));
console.log("division : ", div(num1,num2));
