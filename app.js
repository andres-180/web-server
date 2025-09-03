require('dotenv').config();
const express = require('express')
const app = express()
const hbs = require('hbs');

const port = process.env.PORT;

//Servir contenido estático
app.use(express.static('public'));

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
 

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Andres Perez',
    titulo: 'Curso de node'
  });
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Andres Perez',
    titulo: 'Curso de node'
  });
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Andres Perez',
    titulo: 'Curso de node'
  });
})



app.get('/template', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})


 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})