const reverseStr = require('./func.js')

describe("tests reverseStr function", () => {
  it("reverse string", () => expect(reverseStr("hello")).toBe("olleh"));
});