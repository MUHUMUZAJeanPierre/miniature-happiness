const mongoose = require('mongoose');
const CourseSubModuleSchema = require('./CourseSubModuleSchema');
const QuizSchema = require('./QuizSchema');

const CourseModule = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    description: { type: String },
    submodules: [SubModuleSchema],
    quiz: {
        type: QuizSchema,
        required: false
    }
});

module.exports = mongoose.model('CourseModule', CourseModule);