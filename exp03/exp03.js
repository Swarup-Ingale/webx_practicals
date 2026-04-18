"use strict";
// Parent Class (Base)
class Vehicle {
    brand;
    constructor(brandName) {
        this.brand = brandName;
    }
    startEngine() {
        console.log(`${this.brand} engine is starting...`);
    }
}
// Child Class (Derived)
class Car extends Vehicle {
    model;
    constructor(brandName, modelName) {
        // super() calls the constructor of the Parent class
        super(brandName);
        this.model = modelName;
    }
    showDetails() {
        console.log(`This is a ${this.brand} ${this.model}.`);
    }
}
let myCar = new Car("Toyota", "Supra");
myCar.startEngine(); // Inherited from Vehicle
myCar.showDetails(); // Belongs to Car
