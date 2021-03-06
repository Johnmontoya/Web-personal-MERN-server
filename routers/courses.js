const express = require("express")
const CourseController = require("../controllers/courses")
const md_auth = require('../middlewares/authenticated')

const api = express.Router()

api.post("/add-course", [md_auth.ensureAuth], CourseController.addCourses)
api.get("/get-courses", CourseController.getCourses)
api.delete("/delete-courses/:id", [md_auth.ensureAuth], CourseController.deleteCourse)
api.put("/update-course/:id", [md_auth.ensureAuth], CourseController.updateCourse)

module.exports = api