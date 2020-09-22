import { Address } from "../src/Address";
import { assert } from "chai";
import "mocha";

describe("Address class", () => {
  const address = new Address("Testing street 395", "12345", "Test City");

  it("should be instance of Address", () => {
    assert.instanceOf(address, Address);
  });

  it("getAddress() should return string", () => {
    assert.isString(address.getAddress());
  });
});
