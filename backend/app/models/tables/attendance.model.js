module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define(
    "attendance",
    {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      attendance_code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      attendance_status: {
        type: DataTypes.ENUM("BAD", "SATISFY", "GOOD", "EXCELLENT"),
        default: "SATISFY",
        allowNull: false
      }
    },
    { timestamps: false, freezeTableName: true }
  );

  return Attendance;
};

//const db = require("../config/db.config");

// const Attendance = function(attendance) {
//   // this.attendance_id = attendance.attendance_id;
//   // this.attendance_code = attendance.attendance_code;
//   // this.attendance_status = attendance.attendance_status;
//  //*FOREIGN KEYS
// //  STUDENTS, MODULE,TIMETABLE
//   // this.attendance_student = attendance.attendance_student;
//   // this.attendance_module = attendance.attendance_module;
//   // this.attendance_timetable = attendance.attendance_timetable;
// One student has many attendance
//One attendance has many modules
//

// };
// Attendance.getAllAttendance = result => {
//   let query = " SELECT * FROM attendance";

//   db.query(query, (error, res) => {
//     if (error) {
//       console.log("error:", error);
//       result(error, null);
//       return;
//     }
//     console.log("attendance:", res);
//     result(null, res);
//   });
// };

// Attendance.getAttendance = (attendanceId, result) => {
//   let query = " SELECT * FROM attendance WHERE attendance_id =?";

//   db.query(query, [attendanceId], (error, res) => {
//     if (error) {
//       console.log("error", error);
//       result(error, null);
//       return;
//     }
//     if (res.length) {
//       console.log("Found attendance:", res[0]);
//       result(null, res[0]);
//       return;
//     }
//     result({ kind: "not_found" }, null);
//   });
// };

// module.exports = Attendance;
