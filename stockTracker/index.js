const express = require('express');
const exphbs  = require('express-handlebars'); 
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;

// handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// mapping
app.get('/', function(req, res) {
	res.render('home');
})

// point to folder name
app.use(express.static(path.join(__dirname, 'site')));

app.listen(PORT, () => console.log('Server listening on port ' + PORT));
