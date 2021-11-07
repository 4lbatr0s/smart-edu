 const Course = require('../models/Course')

 exports.createCourse = async (req,res) => {
     const course = await Course.create(req.body);
     try { //we want to catch errors if they come out.
        res.status(200).json({
            status: 'success',
            course:course   
        })
     } catch (error) {
         res.status(400).json({
             status:'fail',
             error,
         })
     }
    
 }


 exports.getAllCourses = async (req,res) => {
    const courses = await Course.find(); //get all courses.
    try { //we want to catch errors if they come out.
    //    res.status(201).json({
    //        status: 'success',
    //        courses,
    //    })
    res.status(201).render('courses', {
        courses, //send coureses to courses.ejs and render courses.ejs
        page_name: 'courses',
    })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            error,
        })
    }
   
}