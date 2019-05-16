// regular JS
// function getSum(num1, num2) {
//   return num1 + num2;
// }
// typescript, which static types set for args and return value
function getSum(num1, num2) {
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
var mySum = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return values
        .map(function (val) { return parseInt(val); })
        .reduce(function (acc, nextVal) { return acc + nextVal; });
};
// console.log(mySum("9", 5));
// we can also make arguments optional
function getName(firstName, lastName) {
    // check to see if last name is undefined
    if (lastName === undefined) {
        return firstName;
    }
    return firstName + " " + lastName;
}
// outputs Charles undefined without checking for undefined last name
//console.log(getName("Charles"));
//void functions don't return anything
function myVoid() {
    // return 'hello' //not valid
}
