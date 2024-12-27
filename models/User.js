const mongoose = require('mongoose');
const Course = require('./Course');


const UserSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true 
},
  email: { 
    type: String, 
    required: true, 
    unique: true 
},
  password: { 
    type: String, 
    
    required: true
 },
  role: { 
    type: String, 
    enum: ['student', 'instructor', 'admin'], 
    default: 'student' 
},
courses: [
    {
      courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
      completedModules: [
        {
          moduleId: { type: mongoose.Schema.Types.ObjectId, ref: 'CourseModule' },
          completedLessons: [
            {
              lessonId: { type: mongoose.Schema.Types.ObjectId, ref: 'CourseSubModuleSchema' },
              completedAt: { type: Date }
            }
          ]
        }
      ],
      quizScores: [
        {
          moduleId: { type: mongoose.Schema.Types.ObjectId, ref: 'CourseModule' },
          score: { type: Number }  
        }
      ]
    }
  ]

});

module.exports = mongoose.model('User', UserSchema);
