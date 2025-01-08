var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    Object.defineProperty(Dog.prototype, "DogName", {
        set: function (label) {
            this.name = label;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "NameOfDog", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    return Dog;
}());
var dogOne = new Dog("Hugo", "Pug");
console.log("Actual name: ".concat(dogOne.NameOfDog));
dogOne.DogName = "Hugu";
console.log("Replaced with: ".concat(dogOne.NameOfDog, " \n"));
var dogTwo = new Dog("Junie", "Corgi");
console.log("Actual name: ".concat(dogTwo.NameOfDog));
dogTwo.DogName = "Julie";
console.log("Replaced with: ".concat(dogTwo.NameOfDog));
