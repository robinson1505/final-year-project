const { response } = require("express");
const { Attendance,Student,Modules,Timetable } = require("../models");

module.exports = {
  async createAttendance(req, res) {
    try {
      const {
        attendance_code,
        student_attendance,
        attendance_module,
        attendance_timetable,
        attendance_status
      } = req.body;
      const attendance = await Attendance.create({
        attendance_code,
        student_attendance,
        attendance_module,
        attendance_timetable,
        attendance_status
      });
      res.status(201).json({ attendance });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  async getAttendance(req, res) {
    try {
      const attendance = await Attendance.findAll({ include: [{ model: Student,},{model:Modules},{model:Timetable}] });
      if(res.status === 400){
        res.json({message:"result Not Found"})
      }
      res.status(200).json({ attendance });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error });
    }
  }

















  
};

// const Attendance = require("../models/attendance.model");

// exports.findAllAttendance = (req, res) => {
//   Attendance.getAllAttendance((error, data) => {
//     if (error) {
//       res.status(500).send({
//         message:
//           error.message || "Some error occurred while retrieving attendance",
//       });
//     } else res.send(data);
//   });
// };

// exports.findAttendance = (req, res) => {
//   let id = req.params.attendanceId;
//   Attendance.getAttendance(id, (error, data) => {
//     if (error) {
//       if (error.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found attendance with id ${id}`,
//         });
//       } else {
//         res.status(500).send({
//           message: "Error while retrieving attendance with id" + id,
//         });
//       }
//     } else res.send(data);
//   });
// };
