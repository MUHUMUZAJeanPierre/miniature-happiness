const mongoose = require('mongoose');
const CourseModule = require('./CourseModule')


const CourseSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    instructor: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'User', 
        required: true 
    },
    modules: [CourseModule],
    enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' }], 
    category: { 
        type: 
        String
     }, 
    level: { 
        type: String, 
        enum: ['Beginner', 'Intermediate', 'Advanced'], 
        default: 'Beginner'
     }, 
});

module.exports = mongoose.model('Course', CourseSchema);