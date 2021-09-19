const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const db1 = require('./models/database1');
const db2 = require('./models/database2');
// production
// db.sequelize.sync();
// development
db1.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db 1.");
});
db2.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db 2.");
});

var corsOptions = {
    origin: 'http://localhost:8081'
}

app.use(cors(corsOptions));

// parse request of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true}));

// simple route
app.get('/', (req, res) => {
    res.json({message: "Welcome to bezkoder application."});
});

require('./routes/tutorial.routes')(app);


// set prot, listen for requests
const PORT = process.env.PROT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});