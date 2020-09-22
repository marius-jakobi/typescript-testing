export class Person {
  public firstName: string;
  public lastName: string;
  public fullName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = firstName + " " + lastName;
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
}
