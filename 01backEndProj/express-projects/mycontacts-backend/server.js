const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const connectionDB = require('./config/dbConnection')


const port = process.env.PORT || 5000; 
const app = express();
connectionDB();

app.use(express.json()); //To parse data in json
app.use("/api/contacts", require("./routes/contactRoutes"))
app.use("/api/users", require("./routes/userRoutes"))
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server live at ${port}`);
})