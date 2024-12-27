const mongoose = require('mongoose');
const CourseSubModuleSchema = require('./CourseSubModuleSchema');

const CourseModule = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { type: String },
    submodules: [SubModuleSchema], 
  });

module.exports = mongoose.model('CourseModule', CourseModule)