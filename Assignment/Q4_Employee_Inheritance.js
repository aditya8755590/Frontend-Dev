class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    work() {
        console.log(this.name + " is working.");
    }
}
class Manager extends Employee {
    work() {
        console.log(this.name + " is managing the team.");
    }
}
const e = new Employee("Rahul", "IT");
const m = new Manager("Amit", "Management");
e.work();
m.work();