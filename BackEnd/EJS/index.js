const express = require("express");
const app = express();
const port = 3000;


app.set('view engine', 'ejs');

app.get("/", (req, res) =>
{
    let siteName = "Nike";
    let searchText = "Search Now"
    let arr = [1, 2, 54, 56];
    res.render("index", {siteName: siteName, 
        searchText: searchText, arr});
})
app.get("/blog/slug", (req, res) =>
{
    let blogTitle = "Nike";
    let blogContent = "Very expensive brand"
    res.render("templates/blogpost.html", {blogTitle: blogTitle, 
        blogContent: blogContent});
})
app.listen(port, () =>
{
    console.log("Website is live at local host 3000");
})