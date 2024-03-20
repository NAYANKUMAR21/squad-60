const mongoose = require("mongoose");
const userSchema = require("./user.schema");

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
