const express = require('express')
const data = require('../database/student-info.json')
const studentInfo = express.Router()


console.log(data,"this is our data")

studentInfo.get('/studentinfo',(req,res)=>{
    
    res.json({
        studentInfo: data,
        userIp: req.userIp,
        userDevice: req.userDevice
    });
  
    
});
studentInfo.post('/studentinfoId', (req, res) => {
    const { student_id } = req.body;
    const requesterIp = req.ip; 
    const deviceType = req.deviceType;  

   
    const student = data.find(s => s.student_id === student_id);

    if (student) {
        res.json(student); 
    } else {
        res.status(404).json({ message: 'Student not found' }); // Handle case where student is not found
    }
    res.json({
        userIp: requesterIp,
        userDevice: deviceType,
        student_id
    });

});
app.post('/studentsByCourse', (req, res) => {
    const courseId = req.body; 
    const requesterIp = req.ip; 
    const deviceType = req.deviceType; 

    const studentsWithCourse = data.filter(student =>
        student.courses.some(course => course.course_id === courseId)
    ).map(student => student.student_id); 

    if (studentsWithCourse.length) {
        res.json(studentsWithCourse);
    } else {
        res.status(404).json({ message: 'No students found for the given course' });
    }
    res.json({
        userIp: requesterIp,
        userDevice: deviceType,
        courses
    });
});


app.post('/findStudentsByCourses', (req, res) => {
    const { student_id } = req.body;
    const requesterIp = req.ip; 
    const deviceType = req.deviceType; 

    
    const requestingStudent = data.find(s => s.student_id === student_id);
    if (!requestingStudent) {
        return res.status(404).json({ message: 'Requesting student not found' });
    }

    
    let courses = requestingStudent.courses.map(course => {
        let studentList = data
            .filter(s => 
                s.courses.some(c => c.course_id === course.course_id) && 
                s.student_id !== student_id 
            )
            .map(s => s.student_id); 
        return {
            course_id: course.course_id,
            course_name: course.course_name,
            studentList
        };
    });

    res.json({
        userIp: requesterIp,
        userDevice: deviceType,
        courses
    });
});






module.exports = studentInfo