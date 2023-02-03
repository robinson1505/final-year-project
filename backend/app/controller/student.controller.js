const Student = require("../models/student.model");

// RETRIEVE ALL STUDENTS
exports.findAllStudents = (req, res) => {
  Student.getAllStudents((error, data) => {
    if (error)
      res.status(500).send({
        message:
          error.message || "Some error occurred while retrieving Students.",
      });
    else res.send(data);
  });
};

// RETRIEVE SINGLE STUDENT
exports.findStudent = (req, res) => {
  let id = req.params.studentId;
  Student.getStudent(id, (error, data) => {
    if (error) {
      if (error.kind === "not_found") {
        res.status(404).send({
          message: `Not found Student with id ${id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Student with id " + id,
        });
      }
    } else res.send(data);
  });
};
