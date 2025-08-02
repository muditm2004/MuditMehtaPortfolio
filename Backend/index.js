const express=require('express');
const server=express();
const port=process.env.PORT || 5000;
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const ProjectSchema = require('./models/Projects');
const SkillsSchema = require('./models/Skills');
const ExperienceSchema = require('./models/Experience');
const EducationSchema = require('./models/Education')
const FeaturedSchema = require('./models/Featured')




require('dotenv').config();
const mongoUrl = process.env.mongoURL;

const corsOptions = {
  origin: [
    'https://muditmehta.me',
    'https://www.muditmehta.me',
    'https://muditmehta.dev',
    'https://www.muditmehta.dev'
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true // only if needed
};

server.use(cors(corsOptions));
server.options('*', cors(corsOptions)); // preflight support

server.use(express.json());



const formController = require('./Mail Service & Controller/Controller')






// MongoDB connection
async function connectDB() {
    try {
      await mongoose.connect(
        mongoUrl
      );
      console.log("Connected to MongoDB");
      console.log(mongoose.connection.name);
      
    } catch (error) {
      console.error("MongoDB connection error:", error);
    }
  }
  
  connectDB();
  
  
  server.use(express.static(path.join(__dirname, '..', 'Frontend', 'dist')));


  // API route for fetching characters


  server.get("/getProjects", async (req, res) => {
    try {
    
      const projects = await ProjectSchema.find();

      
      res.status(200).json(projects);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  server.get('/projectDetails/:id', async(req,res)=>{
    try{
    const details=await ProjectSchema.findById(id);
    res.status(200).json(details);
    }
    catch(err){
      res.status(500).json({"Message":err});
    }
  })

  server.get('/getSkills',async(req,res)=>{
    
    try{
        const skills=await SkillsSchema.find();
        res.status(200).json(skills);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
  })

  server.get('/getExperience',async(req,res)=>{
    
    try{
        const experience=await ExperienceSchema.find();
        res.status(200).json(experience);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
  })

 server.get('/getEducation',async(req,res)=>{
  try{
    const education = await EducationSchema.find()
    res.status(200).json(education);
  }
  catch{
    res.status(500).json({message:err.message});
  }
 })

 server.get('/getFeatured',async(req,res)=>{
    
  try{
      const featured=await FeaturedSchema.find();
      res.status(200).json(featured);
  }
  catch(err){
      res.status(500).json({message:err.message});
  }
})




server.post('/submit-form',formController.handleFormSubmission);


server.get('/',(req,res)=>{
    console.log(process.env.Email);
    
    res.send("Hello from the server");
})

server.use((req, res) => {
  res.redirect('/');
});


server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
