export class Person {
    private name:string;
    private age:number;

    public constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    get Name():string{
        return this.name;
    }

    get Age():number {
        return this.age;
    }

    public displayDetails():void {
        console.log(`Name of the person: ${this.name}`)
        console.log(`Age of the person: ${this.age} \n`)
    }
}