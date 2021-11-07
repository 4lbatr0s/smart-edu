const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//here we decide what is the structure of our model will be.
const CourseSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  description: {
    type: String,
    required: true,
    trim:true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

//now turn Schema above into a MODEL

const Course = mongoose.model('Course', CourseSchema)

//export the model.
module.exports = Course;