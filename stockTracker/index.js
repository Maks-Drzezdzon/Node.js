const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 5000;

// point to folder name
app.use(express.static(path.join(__dirname, 'site')));

// handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


// mapping
app.get('/', function(req, res){
	res.render('home');
});

app.listen(PORT, () => console.log('Server listening on port ' + PORT))
