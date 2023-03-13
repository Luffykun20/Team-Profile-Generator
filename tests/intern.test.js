//tests to prove Intern class methods and properties 
const Intern = require("../lib/intern")

describe("Intern class", () => {
    it("should create an object extending properties and methods from 'Employee' class, and adding a new paramether, school", () => {
        const intern = new Intern("Nicolas", 4, "nicoaguirre0628@hotmail.com", "Georgia Gwinnett College")

        expect(intern.school).toBe("Georgia Gwinnett College");
    });

    describe("getSchool", () => {
        it("should return school value from the 'Intern' class", () => {
            const intern = new Intern("Nicolas", 4, "nicoaguirre0628@hotmail.com", "Georgia Gwinnett College");

            expect(intern.getSchool()).toBe("Georgia Gwinnett College");
        })
    });

    describe("getRole", () => {
        it("should return the role name from 'Intern' class as a string", () => {
            const intern = new Intern("Nicolas", 4, "nicoaguirre0628@hotmail.com", "Georgia Gwinnet College");

            expect(intern.getRole()).toBe("Intern")
        })
    });
})