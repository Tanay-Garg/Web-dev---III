const express = require("express");

const router = express.Router();

const students = require("../data/students");


router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        count: students.length,
        students: students
    });
});

router.get("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "Student ID must be a number"
        });
    }

    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    res.status(200).json({
        success: true,
        student: student
    });
});

router.post("/", (req, res) => {

    const { name, email, course, age } = req.body;

    if (!name || !email || !course || age === undefined) {
        return res.status(400).json({
            success: false,
            message: "Name, email, course and age are required"
        });
    }

    const newStudent = {
        id: students.length > 0
            ? Math.max(...students.map(student => student.id)) + 1
            : 1,

        name: name,
        email: email,
        course: course,
        age: age
    };

    students.push(newStudent);

    res.status(201).json({
        success: true,
        message: "Student created successfully",
        student: newStudent
    });
});

router.put("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "Student ID must be a number"
        });
    }

    const studentIndex = students.findIndex(
        student => student.id === id
    );

    if (studentIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    const { name, email, course, age } = req.body;

    if (!name || !email || !course || age === undefined) {
        return res.status(400).json({
            success: false,
            message: "Name, email, course and age are required"
        });
    }

    students[studentIndex] = {
        id: id,
        name: name,
        email: email,
        course: course,
        age: age
    };

    res.status(200).json({
        success: true,
        message: "Student updated successfully",
        student: students[studentIndex]
    });
});

router.delete("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "Student ID must be a number"
        });
    }

    const studentIndex = students.findIndex(
        student => student.id === id
    );

    if (studentIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    const deletedStudent = students.splice(studentIndex, 1);

    res.status(200).json({
        success: true,
        message: "Student deleted successfully",
        student: deletedStudent[0]
    });
});


module.exports = router;