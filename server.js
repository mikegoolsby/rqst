// Environmental variables

require("dotenv").config();
const { PORT, SECRET } = process.env
const { MONGODB_URI, DB_NAME } = process.env;

const express = require('express');
const app = express();
const mongoose = require("mongoose")

// Mongo setup
mongoose.connect(`${MONGODB_URI}${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
    console.log("RQST is connected to Mongo")
});

// Require data model


// Set view enginer to express-react-views
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Testing server //
app.get('/', (req, res) => {
    res.send('cleared the tower')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})