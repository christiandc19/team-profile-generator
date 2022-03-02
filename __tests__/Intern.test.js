const Intern = require("../lib/Intern");


test("testing set name", () => {
    const name = "Joey";
    const intern = new Intern(name);
    expect(intern.name).toBe(name);
});

test("testing role", () => {
    const test = "Intern";
    const e = new Intern("Joey", 1, "Joey@mail.com");

    expect(e.getRole()).toBe(test);
});
