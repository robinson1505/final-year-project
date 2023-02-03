const db = require("../config/db.config");

const Attendance = function (attendance) {
  this.attendance_id = attendance.attendance_id;
  this.attendance_code = attendance.attendance_code;
  this.attendance_student = attendance.attendance_student;
  this.attendance_module = attendance.attendance_module;
  this.attendance_timetable = attendance.attendance_timetable;
  this.attendance_status = attendance.attendance_status;
};
Attendance.getAllAttendance = (result) => {
  let query = " SELECT * FROM attendance";

  db.query(query, (error, res) => {
    if (error) {
      console.log("error:", error);
      result(error, null);
      return;
    }
    console.log("attendance:", res);
    result(null, res);
  });
};

Attendance.getAttendance = (attendanceId, result) => {
  let query = " SELECT * FROM attendance WHERE attendance_id =?";

  db.query(query, [attendanceId], (error, res) => {
    if (error) {
      console.log("error", error);
      result(error, null);
      return;
    }
    if (res.length) {
      console.log("Found attendance:", res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};

module.exports = Attendance;
