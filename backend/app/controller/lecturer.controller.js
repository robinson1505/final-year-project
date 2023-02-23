const { Lecturer } = require("../models");

module.exports = {
  async createLecturer(req, res) {
    try {
      const {
        lecturer_first_name,
        lecturer_middle_name,
        lecturer_last_name,
        lecturer_staff_number,
        lecturer_department,
        password
      } = req.body;
      const lecturer = await Lecturer.create({
        lecturer_first_name,
        lecturer_middle_name,
        lecturer_last_name,
        lecturer_staff_number,
        lecturer_department,
        password
      });
      res.status(201).json({ lecturer });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

// const Lecturer = require("../models/lecturer.model");

// exports.findAllLecturers = (req, res) => {
//   Lecturer.getAllLecturers((error, data) => {
//     if (error) {
//       res.status(500).send({
//         message:
//           error.message || "Some error occurred while retrieving lecturers"
//       });
//     } else res.send(data);
//   });
// };

// exports.findLecturer = (req, res) => {
//   let id = req.params.lecturerId;
//   Lecturer.getLecturer(id, (error, data) => {
//     if (error) {
//       if (error.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found lecturer with id ${id}`
//         });
//       } else {
//         res.status(500).send({
//           message: "Error while retrieving lecturer with id" + id
//         });
//       }
//     } else res.send(data);
//   });
// };
