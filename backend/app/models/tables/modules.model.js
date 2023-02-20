module.exports = (sequelize, DataTypes) => {
  const Modules = sequelize.define("modules", {
    id: {
      allowNull:false,
      type: DataTypes.UUID,
      default: DataTypes.UUIDv4,
      primaryKey: true
    },
    module_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    module_code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    semester: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{timestamps: false});
  return Modules;
};


// const { DataTypes } = require("sequelize");
// const db = require("../config/db.config");

// const Modules = function(modules) {
//   // this.module_id = modules.module_id;
//   // this.module_code = modules.module_code;
//   // this.module_name = modules.module_name;
//   // this.semester = modules.semester;
//   // * FOREIGN from program model
//   // this.module_nta_level = modules.modules.nta_level;
//   // this.program = modules.program;
// };
// Modules.getAllModules = result => {
//   let query =
//     " SELECT modules.module_id,modules.module_code,modules.module_name,programs.program_code,modules.semester,programs.nta_level FROM modules INNER JOIN programs ON modules.module_nta_level = programs.nta_level";

//   db.query(query, (error, res) => {
//     if (error) {
//       console.log("error:", error);
//       result(error, null);
//       return;
//     }
//     console.log("modules:", res);
//     result(null, res);
//   });
// };
// Modules.getModule = (moduleId, result) => {
//   let query =
//     " SELECT modules.module_id,modules.module_code,modules.module_name,programs.program_code,modules.semester,programs.nta_level  FROM modules INNER JOIN programs ON modules.module_nta_level = programs.nta_level WHERE module_id =?";

//   db.query(query, [moduleId], (error, res) => {
//     if (error) {
//       console.log("error", error);
//       result(error, null);
//       return;
//     }
//     if (res.length) {
//       console.log("Found module:", res[0]);
//       result(null, res[0]);
//       return;
//     }
//     result({ kind: "not_found" }, null);
//   });
// };

// module.exports = Modules;
