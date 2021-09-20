const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);



app.get('/', (req, res) =>{
  res.render('index.ejs')
});


app.get('/noticia', (req, res) =>{
  res.render('noticia')
});

app.listen(3000, () => {
  console.log('O servidor esta okay')
});
