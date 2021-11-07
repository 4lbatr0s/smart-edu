 const Course = require('../models/Course')

 exports.createCourse = async (req,res) => {
     const course = await Course.create(req.body);
     try { //we want to catch errors if they come out.
        res.status(201).json({
            status: 'success',
            course:course
        })
     } catch (error) {
         res.status(400).json({
             status:'bad request',
             course:course
         })
     }
    
 }