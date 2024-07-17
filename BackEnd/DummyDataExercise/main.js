import express from 'express'
import mongoose from 'mongoose'
import Employee from "./models/Employee.js"
const app = express()

let conn = await mongoose.connect('mongodb://localhost:27017/company');
const port = 3000

app.set('view engine',  'ejs');


app.get('/', (req, res) => {
  res.render('index', {foo: 'FOO'});
})
let names = ["Kunal", "Ajay", "Chaman", "Raman"];
let salaries = [1000000, 2500000, 2800000, 2300000];
let cities = ["Delhi", "NYC", "Bengaluru", "Gurgaon"];
let languages = ["C", "C++", "Python", "JS"];


app.get('/generate', async (req, res) => {
    // generate random data
    await Employee.deleteMany({});

    for (let index = 0; index < 10; index++) {
      const e = await Employee.create({
        name : names[Math.floor(Math.random()* names.length)],
        salary : salaries[Math.floor(Math.random()* names.length)],
        city : cities[Math.floor(Math.random()* names.length)],
        languages : languages[Math.floor(Math.random()* names.length)],
        isManager : Math.floor(Math.random() * 2) === 1 ? false : true
      });
      console.log(e);
    }
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

