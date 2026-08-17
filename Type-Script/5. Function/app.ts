// function greet(name: string): string {
//     return "Hello " + name;
// }

// console.log(greet("Kimhab"));
// console.log(greet(10));

// -----> return type function
// 1. Return Number
// function add(a: number, b: number): number {
//     return a + b;
// }
// console.log((add(10, 20)));

// 2. Return Boolean
// function isAdult(age: number): boolean {
//     return age >= 18
// }
// console.log(isAdult(10));

// 3. Return Object
// function getStudent() {
//     return {
//         id: 1,
//         name: "Kimhab",
//         gender: "M"
//     };
// }

// interface Student {
//     id: number;
//     name: string;
// }

// interface Class {
//     room: number,
//     subject: string
// }

// type StudentClass = Student & Class

// function getStudent(): StudentClass {
//     return {
//         id: 1,
//         name: "Kimhab",
//         room: 201,
//         subject: "Node"
//     };
// }

// console.log(getStudent());

// 4. optional parameter
// function greet(name: string, title?: string): string {

//     if (title) {
//         return `${title} ${name}`;
//     }
//     // when if work. the under if not work
    
//     return name;
// }

// console.log(greet("kimhab", "UAT"));

// 5. Default Parameter
// function greet(name: string, age: number = 10): string {
//     return `${name} ${age}`
// }

// console.log(greet("Kimhab"));

// 6. Rest Parameters (...) : use for don't know. how much value
// function total(...numbers: number[]): number {
//     let sum = 0;

//     for (const num of numbers) {
//         sum += num;
//     }

//     return sum;
// }

// console.log("totle 1 : ", total(10, 20));
// console.log("totle 2 : ", total(10, 20, 30, 40));

// 7. Arrow Function
// const add = (a: number, b: number): number => {
//     return a + b;
// }

// console.log(add(10, 20));

// 8. Function Type
// type AddFunction = (a: number, b: number) => number;
// const add: AddFunction = (a, b) => {
//     return a + b;
// };

// console.log(add(10, 90));

// 9. Callback Function
// function calculate(a: number,b: number,callback: (x: number, y: number) => number): number {
//     return callback(a, b);
// }

// const result = calculate(20, 40, (x, y) => x * y);
// console.log(result);


// 10. Function with interface
// interface Student {
//     id: number;
//     name: string;
// }

// function printStudent(student: Student): void {
//     console.log(student);
// }

// const student1: Student = {
//     id: 1,
//     name: "kimhab"
// }

// printStudent(student1)

// 11. function with array
// interface Student {
//     id: number;
//     name: string;
// }
// function printStudents(students: Student[]): void {
//     students.forEach(student => {
//         console.log(student.name);
//     });
// }

// printStudents([
// {
//     id: 1,
//     name: "kimhab"
// },
// {
//     id: 2,
//     name: "lamine yamal"
// }
// ])
