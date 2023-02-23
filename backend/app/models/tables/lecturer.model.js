module.exports = (sequelize, DataTypes) => {
  const Lecturer = sequelize.define("lecturer", {
    id: {
      allowNull:false,
      type: DataTypes.UUID,
      default: DataTypes.UUIDv4,
      primaryKey: true
    },
    lecturer_first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lecturer_middle_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lecturer_last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lecturer_staff_number: {
      type: DataTypes.STRING,
      unique:true,
      allowNull:false
    },
    role: {
      type: DataTypes.ENUM("LECTURER"),
      defaultValue: "LECTURER",
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: 4 }
    }
  },

  {timestamps: false,freezeTableName: true});
  return Lecturer
};

// const db = require("../config/db.config");

// const Lecturer = function(lecturer) {
//   // this.lecturer_id = lecturer.lecturer_id;
//   // this.lecturer_staff_number = lecturer.lecturer_staff_number;
//   // this.lecturer_first_name = lecturer_first_name;
//   // this.lecturer_middle_name = lecturer.lecturer_middle_name;
//   // this.lecturer_last_name = lecturer.lecturer_last_name;
//   // *FOREIGN KEY from department
//   // this.department_name = lecturer.department_name;
//   // this.department_code = lecturer.department_code;
// };

// Lecturer.getAllLecturers = result => {
//   let query =
//     " SELECT lecturer.lecturer_id,lecturer.lecturer_staff_number,lecturer_first_name,lecturer.lecturer_middle_name,lecturer.lecturer_last_name, department.department_name,department_code FROM lecturer INNER JOIN department ON lecturer.lecturer_department = department.department_code";

//   db.query(query, (error, res) => {
//     if (error) {
//       console.log("error:", error);
//       result(error, null);
//       return;
//     }
//     console.log("lecturers:", res);
//     result(null, res);
//   });
// };

// Lecturer.getLecturer = (lecturerId, result) => {
//   let query =
//     " SELECT lecturer.lecturer_id,lecturer.lecturer_staff_number,lecturer_first_name,lecturer.lecturer_middle_name,lecturer.lecturer_last_name, department.department_name,department_code FROM lecturer INNER JOIN department ON lecturer.lecturer_department = department.department_code WHERE lecturer_id =?";

//   db.query(query, [lecturerId], (error, res) => {
//     if (error) {
//       console.log("error", error);
//       result(error, null);
//       return;
//     }
//     if (res.length) {
//       console.log("Found Lecturer:", res[0]);
//       result(null, res[0]);
//       return;
//     }
//     result({ kind: "not_found" }, null);
//   });
// };

// module.exports = Lecturer;
