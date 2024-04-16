// signup
// login
require("dotenv").config();
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authModel = require("./auth.model");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkIfUSerPresent = await authModel.findOne({
      email: email,
      password: password,
    });
    //null
    console.log("Checking User: ", checkIfUSerPresent);
    if (checkIfUSerPresent) {
      var token = jwt.sign(
        { name: checkIfUSerPresent.name, email: checkIfUSerPresent.email },
        process.env.jwt_Secret_key,
      );

      return res.send({ token: token });
    } else {
      return res.send("Signup First");
    }
  } catch (er) {}
});

//resgiter form
router.post("/Signup", async (req, res) => {
  const { name, email, password } = req.body;
  console.log("Result", name, email, password);

  try {
    const checkUserPresent = await authModel.findOne({ email: email });
    if (checkUserPresent) {
      return res.send("User already present");
    } else {
      //create user DB
      await authModel.create({ name, email, password });
      return res.send("User Created Successfully");
    }
  } catch (er) {
    return res.send("requet end");
  }
});

module.exports = router;
