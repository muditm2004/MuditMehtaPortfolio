const mongoose = require("mongoose");

const educationSchema = mongoose.Schema(
  {
    Institute: String,
    Logo: String,
    Study: String,
    Desc: [String],
    Images:[{
      Title:String,
      url:String
    }]
  },
  { collection: "Education" }
);

module.exports = mongoose.model("Education", educationSchema);
