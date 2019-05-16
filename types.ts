// number supports decimals, hexadecimals, etc.
let myNumber: number = 57;

// concatenated strings are also OK, as are function returns
let myString: string = "Hello".slice(0, 3);

let myBool: boolean = true;

//any type covers, well, anything!
let myVar: any = 5;

// console.log(myNumber);
// console.log(myString);
// console.log(myBool);

// DEFINING ARRAYS

// METHOD 1
// let strArr: string[] = ["Hello", "Goodbye"];
// let numArr: number[] = [5, 9, 13, 21, 96];
// let boolArr: boolean[] = [false, true, true, false];

// METHOD 2
let strArr: Array<string> = ["Hello", "Again", "And Goodbye"];
let numArr: Array<number> = [15, 129, 94, 80];
let boolArr: Array<boolean> = [true, true, false, true];

console.log(strArr);
console.log(numArr);
console.log(boolArr);
