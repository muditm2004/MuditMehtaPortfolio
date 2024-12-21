const mongoose = require("mongoose");

const experienceSchema = mongoose.Schema(
  {
    Organization: String,
    Logo: String,
    Role: String,
    Duration: String,
    Description: String,

  },
  { collection: "Experience" }
);

module.exports = mongoose.model("Experience", experienceSchema);
