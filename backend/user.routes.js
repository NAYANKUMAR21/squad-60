const express = require("express");
const userRouter = express.Router();
const userModel = require("./user.model");

userRouter.get("/", async (req, res) => {
  try {
    let userData = await userModel.find({});

    if (userData.length == 0) {
      let data = "Empty Data set";
      return res
        .status(200)
        .send({ message: "Route is working Successfully", request: userData });
    } else {
      return res
        .status(200)
        .send({ message: "Route is working Successfully", request: userData });
    }
  } catch (er) {
    return res.status(404).send({ message: er.message });
  }
});

userRouter.post("/", async (req, res) => {
  //{name:"Jatin",age:21,hobbies:["watching anime"]}
  try {
    const dataBody = req.body;

    await userModel.create(dataBody);

    return res.status(200).send({
      message: "data is been added to the backend",
    });
  } catch (er) {
    return res.status(404).send({ message: er.message });
  }
});

userRouter.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dataBody = req.body;
    console.log("Inside Patch", id);

    await userModel.findByIdAndUpdate(
      { _id: id },
      { name: dataBody.name },
      { new: true },
    );

    return res
      .status(200)
      .send({ message: ` data with this ${id} is updated` });
  } catch (er) {
    return res.status(404).send({ message: er.message });
  }
});

userRouter.delete("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    await userModel.findByIdAndDelete({ _id: userId });
    return res
      .status(200)
      .send({ message: "Data has been deleted Successfully" });
  } catch (er) {
    return res.status(404).send({ message: er.message });
  }
});

module.exports = userRouter;
// axios.post("api", {});
