const express = require('express')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb');
const boyparser = require('body-parser')
const cors = require('cors')

dotenv.config()
console.log(process.env.MONGO_URI) // remove this after you've confirmed it is working


// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'PassManager';

client.connect();

const app = express()
const port = 3000
app.use(cors());
app.use(boyparser.json());
// get all passwords
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
  res.json(findResult);
})

// save a password
app.post('/', async (req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(password);
    res.send({success:true, result:findResult});
})

// delete a password
app.delete('/', async (req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(password);
    res.send({success:true, result:findResult});
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})