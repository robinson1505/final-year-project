module.exports = (sequelize, DataTypes) => {
  const Program = sequelize.define(
    "program",
    {
      id: {
        allowedNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },

      program_code: {
        type: DataTypes.STRING,
        allowNull: false
      },
      program_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nta_level: {
        type: DataTypes.STRING,
        allowedNull: false
      }
    },
    { timestamps: false, freezeTableName: true }
  );
  return Program;
};

// const db = require("../config/db.config");

// const Programs = function(programs) {
//   // this.program_id = programs.program_id;
//   // this.program_code = programs.program_code;
//   // this.program_name = programs.program_name;
//   // this.nta_level = programs.program_name;
//   // * FOREIGN KEY from department table
//   this.program_department = programs.program_department;
// };
// Programs.getAllPrograms = result => {
//   let query = " SELECT * FROM programs";

//   db.query(query, (error, res) => {
//     if (error) {
//       console.log("error:", error);
//       result(error, null);
//       return;
//     }
//     console.log("programs:", res);
//     result(null, res);
//   });
// };

// Programs.getProgram = (programId, result) => {
//   let query = " SELECT * FROM programs WHERE program_id =?";

//   db.query(query, [programId], (error, res) => {
//     if (error) {
//       console.log("error", error);
//       result(error, null);
//       return;
//     }
//     if (res.length) {
//       console.log("Found program:", res[0]);
//       result(null, res[0]);
//       return;
//     }
//     result({ kind: "not_found" }, null);
//   });
// };

// module.exports = Programs;
