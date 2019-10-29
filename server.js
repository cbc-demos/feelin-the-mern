const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const db = require("./models");

// Our connection to our database
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/membersDB",
  { useNewUrlParser: true }
);

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.get("/api/members", (req, res) => {
  db.Member.find()
    .then(members => res.json(members))
    .catch(err => {
      console.log(err);
      res.status(500);
      res.send("Unexpected error");
    });
});

app.post("/api/members", (req, res) => {
  db.Member.create(req.body)
    .then(result => {
      res.json(result)
    })
    .catch(error => {
      console.log(error);
      res.status(400);
      res.send("Bad request");
    });
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
