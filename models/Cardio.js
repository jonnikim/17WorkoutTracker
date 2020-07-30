const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const CardioSchema = new Schema({
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: true,
      },
      name: {
        type: String,
        trim: true,
        required: true,
      },
      duration: {
        type: Number,
        require: true,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;
