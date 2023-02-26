module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define("department", {
    id: {
      allowNull:false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    department_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    department_code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  },
 
  {timestamps: false,freezeTableName: true});
  return Department;
};

// const { DataTypes } = require("sequelize");
// const db = require("../config/db.config");

// const Department = function(department) {
//   this.department_id = department.department_id;
//   this.department_name = department.department_name;
//   this.department_code = department.department_code;
// };

// Department.getAllDepartments = result => {
//   let query = "SELECT * FROM department";
//   db.query(query, (error, res) => {
//     if (error) {
//       console.log("error :", error);
//       result(error, null);
//       return;
//     }
//     console.log("departments: ", res);
//     result(null, res);
//   });
// };
// Department.getDepartment = (departmentId, result) => {
//   let query = "SELECT * fROM department WHERE department_id = ?";
//   db.query(query, [departmentId], (error, res) => {
//     if (error) {
//       console.log("error: ", error);
//       result(error, null);
//       return;
//     }
//     if (res.length) {
//       console.log("Found Department:", res[0]);
//       result(null, res[0]);
//       return;
//     }
//     result({ kind: "not_found" }, null);
//   });
// };

// module.exports = Department;
