module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    "student",
    {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      student_first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      student_middle_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      student_last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      student_registration_number: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      academic_year: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.ENUM("STUDENT"),
        defaultValue: "STUDENT",
        allowNull: false
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: 4 }
      }
    },
    { timestamps: false, freezeTableName: true }
  );
  return Student;
};

// module.exports = (sequelize, DataTypes) => {
//   const Student = sequelize.define(
//     "student",
//     {
//       id: {
//         type: DataTypes.UUID,
//         default: DataTypes.UUIDV4,
//         allowNull: false,
//         primaryKey: true
//       },
//       student_first_name: {
//         type: DataTypes.STRING,
//         allowNull: false
//       },
//       student_middle_name: {
//         type: DataTypes.STRING,
//         allowNull: false
//       },
//       student_last_name: {
//         type: DataTypes.STRING,
//         allowNull: false
//       },
//       student_registration_number: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true
//       },
//       academic_year: {
//         type: DataTypes.STRING,
//         allowNull: false
//       },
//       role: {
//         type: DataTypes.ENUM("STUDENT"),
//         defaultValue: "STUDENT",
//         allowNull: false
//       },
//       password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: { len: 4 }
//       }
//     },
//     {
//       timestamps: false
//     }
//   );
//   return Student;
// };

// const db = require("../config/db.config");

// // CONSTRUCTOR

// const Student = function(student) {
//   // this.student_id = student.student_id;
//   // this.student_registration_number = student.student_registration_number;
//   // this.student_first_name = student.student_first_name;
//   // this.student_middle_name = student.student_middle_name;
//   // this.student_last_name = student.student_last_name;
//   // this.student.academic_year = student.academic_year;
//   // *FOREIGN KEY from program table
//   // this.program_name = student.program_name;
//   // this.student_nta_level = student.student_nta_level;

// };

// Student.getAllStudents = result => {
//   let query =
//     "SELECT student.student_id,  student.student_registration_number,  student.student_first_name,  student.student_middle_name,  student.student_last_name,  programs.program_name,  student.student_nta_level,  student.academic_year FROM student  INNER JOIN programs ON student.student_nta_level = programs.nta_level";

//   db.query(query, (error, res) => {
//     if (error) {
//       console.log("error: ", error);
//       result(null, error);
//       return;
//     }
//     console.log("students: ", res);
//     result(null, res);
//   });
// };

// Student.getStudent = (studentId, result) => {
//   let query =
//     "SELECT student.student_id,  student.student_registration_number,  student.student_first_name,  student.student_middle_name,  student.student_last_name,  programs.program_name,  student.student_nta_level,  student.academic_year FROM student  INNER JOIN programs ON student.student_nta_level = programs.nta_level WHERE student_id = ?";

//   db.query(query, [studentId], (error, res) => {
//     if (error) {
//       console.log("error: ", error);
//       result(error, null);
//       return;
//     }
//     if (res.length) {
//       console.log("Found Student: ", res[0]);
//       result(null, res[0]);
//       return;
//     }

//     //? not found Student with the id
//     result({ kind: "not_found" }, null);
//   });
// };

// module.exports = Student;
