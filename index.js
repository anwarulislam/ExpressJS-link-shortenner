const express = require('express')
const app = express()
const hbs = require('express-handlebars')


app.engine('hbs', hbs({defaultLayout: 'main.hbs'}));
app.set('view engine', 'hbs');

app.listen('3000', () => {
    console.log('Server is running');
})

app.get('/:name', (req, res) => {
    res.render('home', {
        name: req.params.name
    })
})
