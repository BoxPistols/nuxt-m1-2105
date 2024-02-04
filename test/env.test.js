// eslint-disable-next-line import/no-extraneous-dependencies
require("dotenv").config();

describe("Environment Variables", () => {
  it("should load API_KEY from .env", () => {
    expect(process.env.API_KEY).toBeDefined();
    expect(process.env.API_KEY).toBe("1234567890abcdef");
  });
});
