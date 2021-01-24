const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/WSGU", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const connection = mongoose.connection;

const port = 5000;

app.listen(port, () => console.log("Server started on port " + port));

const taskSchema = new mongoose.Schema({
  giorno: {
    type: Number,
    min: 1,
    max: 31,
  },
  valore: {
    type: Number,
    min: 0,
    max: 100,
  },
});

const Task = mongoose.model("Task", taskSchema);

const task = new Task({
  giorno: 1,
  valore: 50,
});

//task.save();

app.get("/api/customers", (req, res) => {
  Task.find({}, function (err, foundTasks) {
    if (foundTasks.length === 0) {
      console.log("Successfully zero");
    } else {
      res.json(foundTasks);
    }
  });
});

// });

// function Streak() {
//   const taskSchema = new mongoose.Schema({
//     //forse "mongoose." si puà ometterE?" https://mongoosejs.com/docs/schematypes.html#arrays
//     Day: Array,
//     Riordino: Array,
//     Yoga: Array,
//     Coding: Array,
//   });

//   // function Streak() {
//   //   const taskSchema = new mongoose.Schema({
//   //     day: {
//   //       type: String,
//   //       min: 1,
//   //       max: 31,
//   //     },
//   //     row1: {
//   //       type: String,
//   //       // min: 0,
//   //       // max: 100,
//   //     },
//   //     row2: {
//   //       type: String,
//   //       // min: 0,
//   //       // max: 100,
//   //     },
//   //     row3: {
//   //       type: String,
//   //       // min: 0,
//   //       // max: 100,
//   //     },
//   //   });

//   const Task = mongoose.model("Task", taskSchema);

//   // const task = new Task({
//   //   day: "",
//   //   row1: "Riordino",
//   //   row2: "Yoga",
//   //   row3: "Coding",
//   // });

//   const task = new Task({
//     Day: Array,
//     Riordino: Array,
//     Yoga: Array,
//     Coding: Array,

//     day: "1",
//     row1: "🦁",
//     row2: "🧘🏼‍♂️",
//     row3: "👨‍💻",
//   });

//   task.save();
// }

// app.get("/api/customers", (req, res) => {
//   Task.find({}, function (err, foundTasks) {
//     if (foundTasks.length === 0) {
//       console.log("Successfully zero");
//     } else {
//       res.json(foundTasks);
//     }
//   });
// });
