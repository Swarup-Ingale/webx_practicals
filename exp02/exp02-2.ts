class Employee {
    public name: string;          // Accessible anywhere
    private salary: number;       // Accessible ONLY inside this class
    protected department: string; // Accessible in this class AND child classes

    constructor(empName: string, empSalary: number, empDept: string) {
        this.name = empName;
        this.salary = empSalary;
        this.department = empDept;
    }

    public getDetails(): void {
        console.log(`${this.name} works in ${this.department} and makes ${this.salary}`);
    }
}

let emp1 = new Employee("Alice", 50000, "IT");
console.log(emp1.name); // WORKS! (Public)
// console.log(emp1.salary); // ERROR: Property 'salary' is private.
