const Employee = require ('./employee')

//Engineer class  will extend Employee properties and methods
class Engineer extends Employee {
    constructor(name, id, email, gitHub){
        super(name, id, email)
        this.gitHub = gitHub
    }
    getGitHub() {
        return this.gitHub
    }
    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer