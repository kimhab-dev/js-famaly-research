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
// const students: {
//     id: number;
//     name: string;
// }[] = [
//     {
//         id: 1,
//         name: "Kimhab"
//     }
// ];
// console.log(students[0].id);

// -> exercise 
// let technologies: string[] = ["Java script", "type script", "Vue.js", "Node.js", "Express.js"];
// console.log(technologies.length);

// for (const t in technologies){
//     if(t == '0'){        
//         console.log(technologies[t]);
//     }
//     if(Number(t) == technologies.length - 1){        
//         console.log(technologies[Number(technologies.length - 1)]);
//     }
// }

// exercise 5
// let scores: number[] = [90, 85, 100, 70, 95, 82, 52];
// for (const t in scores){
//     if(t == '0'){        
//         console.log("Fisrt in dex of array : ", scores[t]);
//     }
//     if(Number(t) == scores.length - 1){        
//         console.log("Last in dex of array : ", scores[Number(scores.length - 1)]);
//     }
// }
// console.log("Total legnth of array : ", scores.length);

// exercise object normal object
// let user: {
//     id: number;
//     username: string;
//     email: string;
//     isActive: boolean
// } = {
//     id: 1,
//     username: "kimhab",
//     email: "kimhabsok@gmail.com",
//     isActive: true
// }

// exercise object optional property
// let project: {
//     readonly id: number;
//     title: string;
//     description?: string;
//     status: true
// } = {
//     id: 1,
//     title: "E-Submit",
//     status: true
// }
// console.log(project);

// array object
let Student: {
    readonly id: number,
    name: string,
    age: number
}[] = [
    {
        id: 1,
        name: "kimhab",
        age: 22
    },
    {
        id: 2,
        name: "Ly hour",
        age: 17
    },
    {
        id: 3,
        name: "chan both",
        age: 11
    }
]

for (const stu in Student){
    if (stu == '0') {
        console.log(Student[stu]);
    }
    if (stu == '2') {
        console.log(Student[stu]);
    }
    
}
















