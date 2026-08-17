// -----> Exercise 1
// type Gender = "Male" | "Female";
// let gender: Gender = "Other"; //error

// -----> Exercise 2 - Create Object
// type OrderStatus =
//     "Pending"
//     | "Processing"
//     | "Completed"
//     | "Cancelled";

// interface Order {
//     id: number;
//     customer: string;
//     status: OrderStatus;
// }

// const oder1: Order = {
//     id: 1,
//     customer: "kimhab",
//     status: "Pending"
// }
// const oder2: Order = {
//     id: 2,
//     customer: "lamine yamal",
//     status: "Completed"
// }

// console.log(oder1);
// console.log(oder2);

// ----> Exercise 3
interface User {
    id: number;
    name: string;
}
interface Teacher {
    subject: string;
}

type TeacherUser = User & Teacher;

const teacher1: TeacherUser = {
    id: 1,
    name: "kimhab",
    subject: "Node.js"
}
console.log(teacher1);


