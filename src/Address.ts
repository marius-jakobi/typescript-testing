export class Address {
  private street: string;
  private zip: string;
  private city: string;

  public constructor(street: string, zip: string, city: string) {
    this.street = street;
    this.zip = zip;
    this.city = city;
  }

  public getAddress(): string {
    return `${this.street}, ${this.zip} ${this.city}`;
  }
}
