const Attendance = require("../models/attendance.model");


exports.findAllAttendance = (req, res) => {
  Attendance.getAllAttendance((error, data) => {
    if (error) {
      res.status(500).send({
        message:
          error.message || "Some error occurred while retrieving attendance",
      });
    } else res.send(data);
  });
};

exports.findAttendance = (req, res) => {
  let id = req.params.attendanceId;
  Attendance.getAttendance(id, (error, data) => {
    if (error) {
      if (error.kind === "not_found") {
        res.status(404).send({
          message: `Not found attendance with id ${id}`,
        });
      } else {
        res.status(500).send({
          message: "Error while retrieving attendance with id" + id,
        });
      }
    } else res.send(data);
  });
};
