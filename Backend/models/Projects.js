const mongoose = require("mongoose");
const { type } = require("os");

const ProjectSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Thumbnail:{
        type: String,
        required:true
    },
    Logo:{
        type: String,
        required:true
    },
    Type: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Desc:{
        What:{
            type:String,
            required:true
        },
        techBG:[String],
        Skills:[
            {
                Name:String,
                Color:String,
            }
        ]
    },
    Links:{
        Github:String,
        Behance:String,
        Weblink:String,
        CaseStudy:String
    }
},{ collection: 'Projects' });


module.exports = mongoose.model("Projects", ProjectSchema);