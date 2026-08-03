// - > normal array
// const scores = [90, 80, 100];
// console.log(scores);

// -> array number
// let scores: number[] = [90, 80, 100];
// console.log(scores);
// let scores: Array<number> = [90, 80, 100];
// console.log(scores);


// -> array string
// let students: string[] = [
//     "Kimhab",
//     "Dara",
//     "Sokha"
// ];
// console.log(students);

// -> array boolean
// let permissions: boolean[] = [
//     true,
//     false,
//     true
// ];
// console.log(permissions);

// -> object
// const student = {
//     name: "Kimhab",
//     age: 22
// };
// console.log(student.name);

// -> object type
// const student: {
//     name: string;
//     age: number;
// } = {
//     name: "Kimhab",
//     age: 22
// };
// console.log(student);

// const student: {
//     name: string;
//     age?: number; // if don't have ? it's error. it's call Optional Property (?)
// } = {
//     name: "Kimhab"
// };

// console.log(student);

// -> read only property
// const student: {
//     readonly id: number;
//     name: string;
// } = {
//     id: 1,
//     name: "Kimhab"
// };
// // student.id = 2; cannot assigned becuase it's readonly properties.
// console.log(student);

// -> Nested Object
// const student = {

//     name: "Kimhab",

//     address: {

//         city: "Phnom Penh",

//         country: "Cambodia"

//     }

// };
// console.log(student);

// -> array object
const students: {
    id: number;
    name: string;
}[] = [
    {
        id: 1,
        name: "Kimhab"
    }
];
console.log(students[0].id);












