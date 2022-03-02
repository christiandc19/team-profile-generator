const Employee = require("../lib/Employee");

test("testing set name", () => {
    const name = "Faran";
    const e = new Employee(name);
    

    expect(e.name).toBe(name);
});

test("testing role", () => {
    const test = "Employee";
    const e = new Employee("Faran", 1, "Faran@mail.com");

    expect(e.getRole()).toBe(test);
});