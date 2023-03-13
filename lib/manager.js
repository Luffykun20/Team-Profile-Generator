const Employee = require('./employee')

//Manager class  will extend Employee properties and methods
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return 'Manager'
    }
}

module.exports = Manager