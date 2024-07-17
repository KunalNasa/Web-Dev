// CRUD Operations
use('CRUDDB');

// console.log(db);

// CREATE 
db.createCollection("courses");
db.courses.insertOne({
    name : "Kunal's CP course",
    price : 0,
    assignments : 12,
    projects : 5
});

// db.courses.insertOne({
//     name : "Kunal's DP course",
//     price : 0,
//     assignments : 15,
//     projects : 10
// });


// db.courses.insertMany([
//     {
//         name : "Kunal's DP course",
//         price : 0,
//         assignments : 15,
//         projects : 10
//     },
//     {
//         name : "Kunal's DP course",
//         price : 0,
//         assignments : 15,
//         projects : 10
//     },
//     {
//         name : "Kunal's DP course",
//         price : 0,
//         assignments : 15,
//         projects : 10
//     },
//     {
//         name : "Kunal's DP course",
//         price : 0,
//         assignments : 15,
//         projects : 10
//     },
//     {
//         name : "Kunal's DP course",
//         price : 0,
//         assignments : 15,
//         projects : 10
//     }
// ])

// READ
// let a = db.courses.find({price : 0});
// // console.log(a);
// // console.log(a.count());
// console.log(a.toArray());

// let b = db.courses.findOne({price : 0}); // gives first obj with price 0
// console.log(b);

// UPDATE

// db.courses.updateOne({price : 0}, {$set:{price : 100}});
// db.courses.updateMany({price : 0}, {$set:{price : 100}});


// DELETE

// db.courses.deleteOne({name : "Kunal's CP course"});
// db.courses.deleteMany({price : 100});
