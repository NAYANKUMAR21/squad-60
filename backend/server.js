const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./user.routes");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send({ message: "Welcome to backend" });
});

app.use("/user", userRouter);

app.listen(8080, async () => {
  await mongoose.connect(
    "mongodb+srv://NAYAN:NAYAN@cluster0.u60zxbv.mongodb.net/SQUAD_60?retryWrites=true&w=majority",
  );
  console.log("Data base is connected");
  console.log("backend running on http://localhost:8080");
});

/*
  name:String,
  age:number
  hobbies:Array

*/
