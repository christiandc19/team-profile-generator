const Engineer = require("../lib/Engineer");

test("testing set name", () => {
    const name = "Faran";    
    const e = new Engineer(name);

    expect(e.name).toBe(name);
});

test("testing role", () => {
    const test = "Engineer";
    const e = new Engineer("Faran", 1, "Faran@mail.com");

    expect(e.getRole()).toBe(test);
});