const mongoose = require('mongoose');

const SubModuleSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    image:{
        type:String,
        required:false
    },
    lessons: [
    {
      title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
      videoUrl: { type: String },
      resources: [{ type: String }], 
    },
  ],
  });

module.exports = mongoose.module('CourseSubModuleSchema', SubModuleSchema);