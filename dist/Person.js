"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    // Get full name of person
    Person.prototype.getFullName = function () {
        return this.fullName;
    };
    // Get first name of person
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    // Get last name of person
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    return Person;
}());
exports.Person = Person;
