// regular JS
// function getSum(num1, num2) {
//   return num1 + num2;
// }

// typescript, which static types set for args and return value
function getSum(num1: number, num2: number): number {
  return num1 + num2;
  // return 'hello'
}

// console.log(getSum(1, 5));
// console.log(getSum(1, 'boo'));

// let mySum = function(num1: any, num2: any): number {
//   // test values
//   if (typeof num1 === "string") {
//     num1 = parseInt(num1);
//   }
//   if (typeof num2 === "string") {
//     num2 = parseInt(num2);
//   }
//
//   return num1 + num2;
// };

let mySum = function(...values: any[]): number {
  return values
    .map(val => parseInt(val))
    .reduce((acc, nextVal) => acc + nextVal);
};

// console.log(mySum("9", 5));

// we can also make arguments optional
function getName(firstName: string, lastName?: string): string {
  // check to see if last name is undefined
  if (lastName === undefined) {
    return firstName;
  }

  return `${firstName} ${lastName}`;
}

// outputs Charles undefined without checking for undefined last name
//console.log(getName("Charles"));

//void functions don't return anything
function myVoid(): void {
  // return 'hello' //not valid
}
