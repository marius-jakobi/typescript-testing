import { Person } from "../src/Person";
import { assert, expect } from "chai";
import "mocha";

describe("Person class", () => {
  const person = new Person("Jon", "Doe");

  it("should return full name", () => {
    expect(person.getFullName()).to.equal("Jon Doe");
  });

  it("should be typeof string", () => {
    assert.typeOf(person.getFullName(), "string");
  });

  it("age should be equal to 42", () => {
    expect(person.getAge()).to.equal(42);
  });

  it("age should be a number", () => {
    expect(person.getAge()).to.be.a("number");
  });
});
