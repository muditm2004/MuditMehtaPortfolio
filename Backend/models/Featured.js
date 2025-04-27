const mongoose = require("mongoose");

const featuredSchema = mongoose.Schema(
  {
    srcImg: String,
    Desc: String,
    Link: String


  },
  { collection: "Featured" }
);

module.exports = mongoose.model("Featured", featuredSchema);
