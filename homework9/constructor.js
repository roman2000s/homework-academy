
let Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function() {
        console.log(2019-this.yearOfBirth);
    }
}
let roman = new Person('Roman', 1984, 'teacher');
let julia= new Person('Julia', 1969, 'designer');
let mark = new Person('Mark', 1948,);

roman.calculateAge();
mark.calculateAge=function() {
        console.log(this.yearOfBirth+65);
};
mark.calculateAge();
julia.calculateAge();
