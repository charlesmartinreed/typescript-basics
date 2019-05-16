var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, email, age) {
        //method that runs when a new version of the class is instantiated
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User was created: " + this.name);
    }
    // methods - these can also be modified with public, private, protected...
    User.prototype.register = function () {
        console.log(this.name + " is now registered");
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " paid invoice");
    };
    return User;
}());
// create a user object
var john = new User("Johnny B. Goode", "johnnyb@yahoo.com", 52);
john.register();
console.log(john.age); // accessible within the class
// console.log(john.email) - nope! only accessible within the class itself
// console.log(john.name) - nope! protected means you can't access it from outside the class but CAN access it from any class that inherits from this one.
// INHERITANCE
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    // remember to call your super class' constructor before initializing your child classes' properties in the constructor
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var mike = new Member(5, "Mike Smith", "mikesmith@gmail.com", 31);
// because mike is also a member, we can use payInvoice
mike.payInvoice();
