//tests to prove Manager class methods and properties 
const Manager = require ("../lib/manager");

describe("Manager class", () => {
    it("should create an object extending properties and methods from 'Employee' class, and adding a new parameter, officeNumber.", () => {
        const manager = new Manager("Kelvin", 2, "kelvin_cieza@hotmail.com", 4);

        expect(manager.officeNumber).toEqual(4);
    });
    
    describe("getOfficeNumber", () => {
        it("should return the officeNumber value from the 'Manager' class", () => {
            const manager = new Manager("Kelvin", 2, "kelvin_cieza@hotmail.com", 4);

            expect(manager.getOfficeNumber()).toBe(4);
        })
    });

    describe("getRole", () => {
        it ("should return the role name from 'Manager' class as a string", () => {
            const manager = new Manager("Kelvin", 2, "kelvin_cieza@hotmail.com", 4);

            expect(manager.getRole()).toBe("Manager")
        })
    });

})
