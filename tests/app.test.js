const { getStatus } = require("../app");

test("application should return Operational", () => {
    expect(getStatus()).toBe("Operational - v1.1");
});