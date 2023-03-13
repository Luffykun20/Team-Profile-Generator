const Employee = require ('./employee')

//Intern class  will extend Employee properties and methods
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return 'Intern'
    }
}

module.exports = Intern