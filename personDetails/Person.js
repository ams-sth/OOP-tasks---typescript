"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Person.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "Age", {
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.displayDetails = function () {
        console.log("Name of the person: ".concat(this.name));
        console.log("Age of the person: ".concat(this.age, " \n"));
    };
    return Person;
}());
exports.Person = Person;
