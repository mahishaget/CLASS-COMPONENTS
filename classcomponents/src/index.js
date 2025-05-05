// // 1. Object literals
// var challa = {
//     name: "challa",
//     age: 8,
// };
// console.log(challa);

// var Mahisha = {
//     name: "Mahlet",
//     age: 21,
// };
// console.log(Mahisha);

// // 2. Array with a missing element
// var array = [1, 2, 3, 45, 6, 7, 8, 90, 9, 8, 65, 43, 2];
// console.log(array); // Empty entry removed

// // 3. Constructor function
// function person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// var abe = new person("Abebe", 19);

// // Object with same property values
// var Abebe = {
//     name: "Abebe",
//     age: 30,
// };
// console.log(Abebe);

// // 4. Constructor function for students
// function EvangadiStudents(name, group) {
//     this.name = name;
//     this.group = group;
// }

// let studentOne = new EvangadiStudents("Challa", 10);
// let studentTwo = new EvangadiStudents("Kebede", 11);
// let studentThree = new EvangadiStudents("Abebe", 12);

// console.log(studentOne);
// console.log(studentTwo);
// console.log(studentThree);

// // 5. Prototypes and Inheritance
// var Abebe = new person("Alemneh", 22);

// person.prototype.hello = "Olla";
// person.prototype.getName = function () {
//     return this.name;
// };

// console.log(Abebe);
// console.log(Abebe.getName());

// EvangadiStudents.prototype.batch = "Jan,2023";
// EvangadiStudents.prototype.studentInfo = function () {
//     return `${this.name} is a ${this.batch} Evangadi student in group ${this.group}`;
// };

// console.log(studentOne.studentInfo());
// console.log(studentTwo.studentInfo());
// console.log(studentThree.studentInfo());

// // 6. ES6 Class definition
// class Person {
//     constructor(name, age, sex) {
//         this.name = name;
//         this.age = age;
//         this.sex = sex;
//     }

//     getName() {
//         return this.name;
//     }
// }

// const almaz = new Person("Almaz", 23, "Female");
// console.log(almaz);
// console.log(almaz.getName());

// // 7. ES6 class for Evangadi Students
// class EvangadiStudentsClass {
//     constructor(name, group) {
//         this.name = name;
//         this.group = group;
//     }
// }

// let studentClassOne = new EvangadiStudentsClass("Challa", 6);
// console.log(studentClassOne.name);

// // 8. Fixed Car class
// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }

//     age() {
//         let date = new Date(); // Capital D
//         let carAge=date.getFullYear() - this.year;
//         return carAge;
//     }
// }

// let myCar = new Car("Ford", 2014);
// console.log(myCar.age());
// console.log(myCar)

// // 9. Class-based inheritance
// class Student extends Person {
//     constructor(name, age, sex, grade, department) {
//         super(name, age, sex);
//         this.grade = grade;
//         this.department = department;
//     }
// }

// var student1 = new Student("Mahlet", 21.15, "Female", "A", "CS");
// console.log(student1);
// console.log(student1.getName());
// console.log(student1);
// class model extends Car{
//     constructor(name,year,model){
//         super(name,year)
//         this.model=model
//     }
//     carInfo(){
//         return `This is ${this.age()} year old ${this .name} ${this.model}.`;
//     }}
//     // console.log(modal)
// let carTwo= new model("Toyota",2020,"camry")
// console.log(carTwo)
// console.log(carTwo.carInfo());
// class condition extends model{
//     constructor(name,year,model,condition){
//         super(name,year,model)
//         this.condition=condition;
//     }
//     carCondition(){
//         return `This ${this.age()} year old${this.name} ${this.model}is ${this.condition}.`;
//     }
// }
// let carThree= new condition("Honda",2022,"civic","Live brand new");
// console.log(carThree);
// console.log(carThree.name)
// console.log(carThree.age());
// console.log(carThree.year)
// let a=[10,20,30];
// // let b=a[0]; 
// // let c=a[1];
// let[d,c]=[10,20]
// console.log(c);
// console.log(a)
// console.log(d)
// const user={
//     id:42,
//     is_verified:true,
// };
// const x=user.id;
// const y= user.is_verified;
// console.log(x);
// console.log(y);
// const {id,is_verified} =user;

// let objInfo={
// studentName:"Mahlet",
// address: "Bahir Dar",
// age:22,
// };
// let {studentName,address,age}=objInfo;
// console.log(studentName);
// console.log(address);
// console.log(age);


