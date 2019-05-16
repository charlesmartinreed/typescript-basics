// interfaces must contain properties AND methods
interface UserInterface {
  name: string;
  email: string;
  age: number;
  register(): void;
  payInvoice(): void;
}

class User implements UserInterface {
  // class can have property and methods
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    //method that runs when a new version of the class is instantiated
    this.name = name;
    this.email = email;
    this.age = age;

    console.log(`User was created: ${this.name}`);
  }

  // methods - these can also be modified with public, private, protected...
  register(): void {
    console.log(`${this.name} is now registered`);
  }

  payInvoice(): void {
    console.log(`${this.name} paid invoice`);
  }
}

// create a user object
let john = new User("Johnny B. Goode", "johnnyb@yahoo.com", 52);

john.register();

console.log(john.age); // accessible within the class
// console.log(john.email) - nope! only accessible within the class itself
// console.log(john.name) - nope! protected means you can't access it from outside the class but CAN access it from any class that inherits from this one.

// INHERITANCE
class Member extends User {
  id: number;

  // remember to call your super class' constructor before initializing your child classes' properties in the constructor
  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  payInvoice() {
    super.payInvoice();
  }
}

let mike: User = new Member(5, "Mike Smith", "mikesmith@gmail.com", 31);
// because mike is also a member, we can use payInvoice

mike.payInvoice();
