import { Person } from "../src/Person";
import { Address } from "../src/Address";
import { expect } from "chai";
import "mocha";

describe("Person class", () => {
  const address = new Address("Testing street 395", "12345", "Test City");
  const person = new Person("Jon", "Doe", address);

  it("getFullName() should return full name", () => {
    expect(person.getFullName()).to.equal("Jon Doe");
  });

  it("getFullName() should return a string", () => {
    expect(person.getFullName()).to.be.a("string");
  });

  it("age should be equal to 42", () => {
    expect(person.getAge()).to.equal(42);
  });

  it("age should be a number", () => {
    expect(person.getAge()).to.be.a("number");
  });

  it("getAddress() should return a instance of Address", () => {
    expect(person.getAddress()).to.be.an.instanceOf(Address);
  });
});
