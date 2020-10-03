// Environmental variables

require("dotenv").config();
const { PORT, SECRET } = process.env
const { MONGODB_URI, DB_NAME } = process.env;

const express = require('express');
const app = express();
const mongoose = require("mongoose")
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

// Require rqst Router
const rqstRouter = require("./controllers/router");
const auth = require("./controllers/router");

// Mongo setup
mongoose.connect(`${MONGODB_URI}${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
    console.log("RQST is connected to Mongo")
});

// Set view enginer to express-react-views
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use(
    session({
      secret: SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: { secure: process.env.NODE_ENV === "production" },
      store: new MongoStore({ mongooseConnection: mongoose.connection}),
    })
);


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.json())

// Server -> router
app.use('/rqst-go', rqstRouter)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})