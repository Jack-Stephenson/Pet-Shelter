const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
app.use(cors(), express.json(), express.urlencoded({extended: true}));
require('./config/pets.config')
require('./routes/pets.routes')(app);
app.listen(port, ()=>console.log(`Listening on port ${port} Captain!`));