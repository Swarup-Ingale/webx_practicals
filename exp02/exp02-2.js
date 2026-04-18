"use strict";
class Employee {
    name; // Accessible anywhere
    salary; // Accessible ONLY inside this class
    department; // Accessible in this class AND child classes
    constructor(empName, empSalary, empDept) {
        this.name = empName;
        this.salary = empSalary;
        this.department = empDept;
    }
    getDetails() {
        console.log(`${this.name} works in ${this.department} and makes ${this.salary}`);
    }
}
let emp1 = new Employee("Alice", 50000, "IT");
console.log(emp1.name); // WORKS! (Public)
// console.log(emp1.salary); // ERROR: Property 'salary' is private.
