const mongoose = require("mongoose");

const experienceSchema = mongoose.Schema(
  {
    Organization: String,
    Logo: String,
    Role: String,
    StartDate: String,
    EndDate: String,
    Description: [String],
    Skills: [{
      Name:String,
      Color:String
    }]


  },
  { collection: "Experience" }
);

module.exports = mongoose.model("Experience", experienceSchema);
