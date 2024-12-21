const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Type: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Content: {
        What: {
            type: String,
            required: true
        },
        How: {
            type: String,
            required: true
        },
        Skills: [
            {
                Name:String,
                Color:String,
            }
        ],
        Links: {
            Github: {
                type: String,
                
            },
            Behance: {
                type: String,
                
            },
            Weblink: {
                type: String,
                required: true
            }
        },
        Images: {
            CardNBanner: {type: String, required: true},
            Logo:{type: String, required: true},
        }
    }
},{ collection: 'Projects' });


module.exports = mongoose.model("Projects", ProjectSchema);