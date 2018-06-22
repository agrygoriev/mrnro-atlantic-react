const express = require("express");
const mongoose = require("mongoose");
const app = express();

const users = require("./routes/api/users");
const dossier = require("./routes/api/dossier");
const logs = require("./routes/api/logs");
const route = require("./routes/api/route");

//DB config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello!"));

//Use routes
app.use("/api/users", users);
app.use("/api/dossier", dossier);
app.use("/api/logs", logs);
app.use("/api/route", route);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
