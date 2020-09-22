import { Person } from "../src/Person";
import { expect } from "chai";
import "mocha";

describe("Person class", () => {
  const person = new Person("Jon", "Doe");

  it("should return first name", () => {
    expect(person.getFirstName()).to.equal("Jon");
  });

  it("should return full name", () => {
    expect(person.getLastName()).to.equal("Doe");
  });

  it("should return full name", () => {
    expect(person.getFullName()).to.equal("Jon Doe");
  });
});
