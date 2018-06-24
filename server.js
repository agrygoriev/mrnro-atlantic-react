const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require("./routes/api/users");
const dossier = require("./routes/api/dossier");
const logs = require("./routes/api/logs");
const route = require("./routes/api/route");

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

//Passport middleware init
app.use(passport.initialize());

//Passport config
require('./config/passport')(passport);
//Use routes
app.use("/api/users", users);
app.use("/api/dossier", dossier);
app.use("/api/logs", logs);
app.use("/api/route", route);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));