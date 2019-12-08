const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;

// point to folder name
app.use(express.static(path.join(__dirname, 'site')));

app.listen(PORT, () => console.log('Server listening on port ' + PORT))
