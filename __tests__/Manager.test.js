
const Manager = require("../lib/Manager");

test("testing set name", () => {
    const name = "Faran";    
    const e = new Manager(name);

    expect(e.name).toBe(name);
});

test("testing role", () => {
    const test = "Manager";
    const e = new Manager("Faran", 1, "Faran@mail.com");

    expect(e.getRole()).toBe(test);
});