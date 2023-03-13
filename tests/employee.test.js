//tests to prove Employee class methods and properties 
const Employee = require("../lib/employee");

describe("Employee class", () => {
    it("should create an object with name, id, and email as parameters", () => {
        const employee = new Employee("Cristhian", 1, "cristhian_georgia_20@hotmail.com");

        expect(employee.name).toBe("Cristhian");
        expect(employee.id).toEqual(1);
        expect(employee.email).toBe("cristhian_georgia_20@hotmail.com");
    });

    describe("getName", () => {
        it("should return the name value from the 'employee' object", () => {
            const employee = new Employee("Cristhian", 1, "cristhian_georgia_20@hotmail.com");


            expect(employee.getName()).toBe("Cristhian");
        });
    })

    describe("getId", () => {
        it("should return the id value from the 'employee' object", () => {
            const employee = new Employee("Cristhian", 1, "cristhian_georgia_20@hotmail.com");


            expect(employee.getId()).toBe(1);
        });
    })

    describe ("getEmail", () => {
        it("should return the email value from the 'employee' object", () => {
            const employee = new Employee("Cristhian", 1, "cristhian_georgia_20@hotmail.com");


            expect(employee.getEmail()).toBe("cristhian_georgia_20@hotmail.com");
        });
    })

    describe("getRole", () => {
        it("should return the role name as string", () => {
            const employee = new Employee("Cristhian", 1, "cristhian_georgia_20@hotmail.com");

            expect(employee.getRole()).toBe("Employee")
        })
    })
})

