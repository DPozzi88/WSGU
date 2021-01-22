const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/reactexpress", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const connection = mongoose.connection;

const port = 5000;

app.listen(port, () => console.log("Server started on port " + port));

const taskSchema = new mongoose.Schema({
  giorno: Number,
  valore: {
    type: Number,
    min: 0,
    max: 100,
  },
});

const Task = mongoose.model("Task", taskSchema);

const task = new Task({
  giorno: 1,
  valore: 6,
});

task.save();

app.get("/api/customers", (req, res) => {
  Task.find({}, function (err, foundTasks) {
    if (foundTasks.length === 0) {
      console.log("Successfully zero");
    } else {
      res.json(foundTasks);
    }
  });
});
