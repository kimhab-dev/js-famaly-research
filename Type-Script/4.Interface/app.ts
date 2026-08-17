// interface Student {
//     id: number;
//     name: string;
//     age: number;
// }

// const student1: Student = {
//     id: 1,
//     name: "Kimhab",
//     age: 22
// };

// const student2: Student = {
//     id: 2,
//     name: "Dara",
//     age: 20
// };

// const student3: Student = {
//     id: 3,
//     name: "Sokha",
//     age: 21
// };
// console.log(student3);

// -----> Type Alias
// type Student = {
//     id: number;
//     name: string;
// };


// -----> 1. Primitive Type Alias
// type Username = string;

// let user1: Username = "kimhab";
// let user2: Username = "admin";
// let user3: Username = 10; error

// -----> 2. Union Type (|)
// let id: string | number;

// id = "A001";
// id = 1;

// -----> 3. Literal Type
// type Status = "draft" | "submitted" | "approved" | "rejected";
// let Proposal: Status = "draft";
// console.log(Proposal);

// -----> 4. Function Type
// type AddFunction = (
//     a: number,
//     b: number
// ) => number;
// const add: AddFunction = (a, b) => {
//     return a + b;
// };
// console.log(add(10, 20));
// console.log(add(10, 20));

// -----> 5. Intersection Type (&): combo type
interface User {
    id: number;
    name: string;
    gender?: string;
}

interface Student {
    studentId: string;
}

type StudentUser = User & Student;

const student: StudentUser = {
    id: 1,
    name: "Kimhab",
    studentId: "ST001",
    gender: "M"
};

console.log(student);
