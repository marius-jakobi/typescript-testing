import { Address } from "./Address";

export class Person {
  private firstName: string;
  private lastName: string;
  private fullName: string;
  private age: number;
  private address: Address;

  constructor(firstName: string, lastName: string, address: Address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = firstName + " " + lastName;
    this.age = 42;
    this.address = address;
  }

  // Get full name of person
  public getFullName(): string {
    return this.fullName;
  }
  // Get first name of person
  public getFirstName(): string {
    return this.firstName;
  }
  // Get last name of person
  public getLastName(): string {
    return this.lastName;
  }

  // Get age
  public getAge(): number {
    return this.age;
  }

  // Get address
  public getAddress(): Address {
    return this.address;
  }
}
