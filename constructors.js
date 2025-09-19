class overall {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
}
let person = new overall('Gokul', 20)
console.log(person.name)

//Another level example

class Calculate {
    constructor(width, height) {
        this.width = width;
        this.height = height;

    }
    area() {
        return this.width * this.height
    }
}
let User = new Calculate(5, 10)
console.log(User.area())


//Another level Example

class account {
    constructor(balance) {
        if (balance < 0) {
          console.log("Your account balance is minus ");
        }
        this.balance = balance
    }
}
let acc = new account(1)
console.log(acc.balance)