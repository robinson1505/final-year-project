const { Student } = require("../models");

module.exports = {
  async createStudent(req, res) {
    try {
      const {
        student_first_name,
        student_middle_name,
        student_last_name,
        student_registration_number,
        academic_year,
        student_program,
        password
      } = req.body;
      const student = await Student.create({
        student_first_name,
        student_middle_name,
        student_last_name,
        student_registration_number,
        academic_year,
        student_program,
        password
      });
      res.status(201).json({ lecturer });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};








// const Student = require("../models/student.model");

// RETRIEVE ALL STUDENTS
// exports.findAllStudents = (req, res) => {
//   Student.getAllStudents((error, data) => {
//     if (error)
//       res.status(500).send({
//         message:
//           error.message || "Some error occurred while retrieving Students."
//       });
//     else res.send(data);
//   });
// };

// // RETRIEVE SINGLE STUDENT
// exports.findStudent = (req, res) => {
//   let id = req.params.studentId;
//   Student.getStudent(id, (error, data) => {
//     if (error) {
//       if (error.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found Student with id ${id}.`
//         });
//       } else {
//         res.status(500).send({
//           message: "Error retrieving Student with id " + id
//         });
//       }
//     } else res.send(data);
//   });
// };
