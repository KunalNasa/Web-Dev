// const fs = require("fs/promises");
import fs from 'fs/promises'

// I am inside a module so i can use await without async functions
let a = await fs.readFile("Kunal.txt");
let b = await fs.appendFile("Kunal.txt", "\n\n\n\n\n HELLO");
console.log(a.toString());