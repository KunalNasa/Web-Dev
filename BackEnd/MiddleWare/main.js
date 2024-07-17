const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');

// app.use(express.static("public"));


// MiddleWare 1
app.use((req, res, next) => {
    const log  = `${Date.now()} is a ${req.method}`;
    fs.appendFile("logs.txt", log, (err) =>
    {
        if(err)
        {
            console.log("Error");
        }
    })
    console.log(`${Date.now()} is a ${req.method}`);
    // res.send("Hacked by M1");
    next();
})

// MiddleWare 2
app.use((req, res, next) => {
    console.log('Logged2');
    next();
})



app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/about", (req, res) => {
    res.send("Hello World");
})

app.get("/contact", (req, res) => {
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`App is live at local port ${port}`);
});

