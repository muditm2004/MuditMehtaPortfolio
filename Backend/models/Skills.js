const mongoose = require("mongoose");

const SkillsSchema = mongoose.Schema(
  {
    Type:String,
    Skills: [
        {
            Name: String,
            Color: String
        }
    ],
  },
  { collection: "Skills" }
);

module.exports = mongoose.model("Skills", SkillsSchema);
