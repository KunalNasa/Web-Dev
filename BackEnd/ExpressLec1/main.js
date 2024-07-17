import express from "express"
const app = express()
const port = 3000

app.use(express.static('ExpressLec1/public'));
 
// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World3!')
});
app.get('/about', (req, res) => {
    res.send('About us!')
});

app.get('/contact', (req, res) => {
    res.send('Contact us!')
});
app.get('/blog', (req, res) => {
    res.send('Hello blog!')
})

app.get('/blog/:slug/:second', (req, res) => {
    // for URL : http://127.0.0.1:3000/blog/intro/inner?mode=dark&region=in
    console.log(req.params)  // params: { slug: 'intro', second: 'inner' },
    console.log(req.query)  // query: { mode: 'dark', region: 'in' },

    res.send(`hello ${req.params.slug} and ${req.params.second}`)
  })
// app.get('/blog/intro-to-js', (req, res) => {
//     res.send('Hello intro to js!')
// })
// app.get('/blog/intro-to-python', (req, res) => {
//     res.send('Hello intro to python!')
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})