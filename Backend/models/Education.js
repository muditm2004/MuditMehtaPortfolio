const mongoose = require("mongoose");

const educationSchema = mongoose.Schema(
  {
    Institute: String,
    Logo: String,
    Study: String,
    Duration: String,
    Description: String,

  },
  { collection: "Education" }
);

module.exports = mongoose.model("Education", educationSchema);
