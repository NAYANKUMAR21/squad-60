const mongoose = require("mongoose");

const file = {
  name: { type: String, required: true },
  age: { type: Number, required: true },
  hobbies: {
    type: [String],
    required: true,
    validate: {
      validator: function (array) {
        return array.length > 0;
      },
    },
  },
};
const userSchema = new mongoose.Schema(file);

module.exports = userSchema;
