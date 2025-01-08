class Dog {
    private name:string;
    private breed:string;

     constructor(name:string, breed:string){
        this.name = name;
        this.breed = breed;
     }

     set DogName(label:string){
        this.name = label;
     }

    get NameOfDog():string{
        return this.name;
    }
}

const dogOne = new Dog ("Hugo", "Pug");
console.log(`Actual name: ${dogOne.NameOfDog}`);
dogOne.DogName = "Hugu";
console.log(`Replaced with: ${dogOne.NameOfDog} \n`);


const dogTwo = new Dog("Junie", "Corgi");
console.log(`Actual name: ${dogTwo.NameOfDog}`);
dogTwo.DogName = "Julie";
console.log(`Replaced with: ${dogTwo.NameOfDog}`);