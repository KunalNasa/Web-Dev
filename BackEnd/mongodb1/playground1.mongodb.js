/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('learnJSDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
    {
      "name": "java",
      "price": 2500,
      "Instructor": "Sara"
    },
    {
      "name": "python",
      "price": 3500,
      "Instructor": "Mike"
    },
    {
      "name": "javascript",
      "price": 2800,
      "Instructor": "Lisa"
    },
    {
      "name": "C#",
      "price": 3200,
      "Instructor": "John"
    },
    {
      "name": "Ruby",
      "price": 2700,
      "Instructor": "Emma"
    },
    {
      "name": "PHP",
      "price": 3000,
      "Instructor": "David"
    },
    {
      "name": "HTML",
      "price": 2000,
      "Instructor": "Sophia"
    },
    {
      "name": "CSS",
      "price": 2000,
      "Instructor": "Daniel"
    },
    {
      "name": "SQL",
      "price": 2800,
      "Instructor": "Olivia"
    },
    {
      "name": "Swift",
      "price": 3300,
      "Instructor": "James"
    }
  ]
  );


// Print a message to the output window.
console.log("Done inserting data");
