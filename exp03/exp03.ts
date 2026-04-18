// Inheritance in TS

// Parent Class (Base)
class Vehicle {
    brand: string;

    constructor(brandName: string) {
        this.brand = brandName;
    }

    startEngine(): void {
        console.log(`${this.brand} engine is starting...`);
    }
}

// Child Class (Derived)
class Car extends Vehicle {
    model: string;

    constructor(brandName: string, modelName: string) {
        // super() calls the constructor of the Parent class
        super(brandName); 
        this.model = modelName;
    }

    showDetails(): void {
        console.log(`This is a ${this.brand} ${this.model}.`);
    }
}

let myCar = new Car("Toyota", "Supra");
myCar.startEngine(); // Inherited from Vehicle
myCar.showDetails(); // Belongs to Car
