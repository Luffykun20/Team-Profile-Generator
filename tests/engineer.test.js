//tests to prove Engineer class methods and properties 
const Engineer = require("../libs/engineer");

describe ("Engineer class", () => {
    it("should create an object extending properties and methods from 'Employee' class , and adding a new parameter, gitHub", () => {
        const engineer = new Engineer("Jorge", 3, "txmuxx_19@hotmail.com", "Luffykun20");

        expect(engineer.gitHub).toBe("Luffykun20");
    });

    describe("getGithub", () => {
        it("should return the gitHub account from the 'Engineer' class", () => {
            const engineer = new Engineer("Jorge", 3, "txmuxx_19@hotmail.com", "Luffykun20");

            expect(engineer.getGithub()).toBe("Luffykun20")
        })
    })

    describe("getRole", () => {
        it("should return the role name from 'Engineer' class as a string", () => {
            const engineer = new Engineer("Jorge", 3, "txmuxx_19@hotmail.com", "Luffykun20");

            expect(engineer.getRole()).toBe("Engineer");
        })
    });
})