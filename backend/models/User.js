const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    causasContributions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Causa",
      },
    ],
    trabalhosContributions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Trabalho",
      },
    ],
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
module.exports = {
  User,
  userSchema,
};
