export class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet() {
        return "Helloo, " + this.name;
    }
};