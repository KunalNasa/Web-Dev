const { error } = require("console");
const fs = require("fs");
console.log(fs);

console.log("start");
// fs.writeFileSync("Kunal.txt", "Kunal is a good boy"); // it is a sync func..not recommended
fs.writeFile("Kunal.txt", "Kunal is good", ()=>{
    console.log("Hola");
    fs.readFile("Kunal.txt", (error, data) => {
        console.log(error, data.toString());
    })
});
fs.appendFile("Kunal.txt", " and sincere too", (e,d) =>
{
    console.log(d);
})
console.log("end");
