const express =  require('express')
const blog =  require('./routes/blog.js')

const app = express()
const port = 3000

app.use(express.static('public'));
app.use('/blog', blog)

app.get('/', (req, res) => {
  res.send('Hello World 1/0 !')
}) 

app.post('/', (req, res) => {
  console.log("Hey its a post request!");
  res.send('Hello World Post!')
})

app.post('/', (req, res) => {
  console.log("Hey its a post request!");
  res.send('Hello World Post!')
});


app.put('/', (req, res) => {
  console.log("Hey its a put request!");
  res.send('Hello World put!')
});

app.delete('/', (req, res) => {
  console.log("Hey its a delete request!");
  res.send('Hello World delete!')
});

app.get("/index", (req, res) =>{
  console.log("Hola");
  res.sendFile('templates/index.html', {root: '/Users/akashnasa/Desktop/webdev/Web-Dev/BackEnd/ResponseReqRouter'} );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

