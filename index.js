const express = require('express');
const app = express();
const path = require('path');
const DatabaseConnection = require('./dbConnection');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const logger = require("morgan");


// call the database connection function
DatabaseConnection();
require("./models");



var indexRouter = require('./routes/index');
var UserRouter = require('./routes/user');

app.use(express.static('public'))
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());



app.use("/", indexRouter);
app.use('/', UserRouter);

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
})

app.listen(process.env.PORT || 3000,()=>{
    console.log(`listening on port ${process.env.PORT}`)
});

module.exports = app;