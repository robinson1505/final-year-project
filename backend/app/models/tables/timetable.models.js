module.exports = (sequelize, DataTypes) => {
  const Timetable = sequelize.define(
    "timetable",
    {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        default: DataTypes.UUIDV4,
        primaryKey: true
      },
      timetable_code: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      module_day: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      time_in: {
        type: DataTypes.TIME,
        allowNull: false
      },
      time_out: {
        type: DataTypes.TIME,
        allowNull: false
      },
      updatedAt: {
        type: "TIMESTAMP",
        defaultValue: DataTypes.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
        allowNull: false
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );
  return Timetable;
};

// const { DataTypes } = require("sequelize");
// const db = require("../config/db.config");

// const Timetable = function(timetable) {
//   // this.timetable_id = timetable.timetable_id;
//   // this.timetable_code = timetable.timetable_code;
//   // this.module_day = timetable.module_day;
//   // this.time_in = timetable.time_in;
//   // this.time_out = timetable.time_out;
//   // *FOREIGN KEY
//   // MODULE,VENUE,LECTURER
//   // this.timetable_module = timetable.timetable_module;
//   // this.timetable_venue = timetable.timetable_venue;
//   // this.timetable_lecturer = timetable.timetable_lecturer;
// };
// Timetable.getAllTimetable = result => {
//   let query = " SELECT * FROM timetable";

//   db.query(query, (error, res) => {
//     if (error) {
//       console.log("error:", error);
//       result(error, null);
//       return;
//     }
//     console.log("timetable:", res);
//     result(null, res);
//   });
// };

// Timetable.getTimetable = (timetableId, result) => {
//   let query = " SELECT * FROM timetable WHERE timetable_id =?";

//   db.query(query, [timetableId], (error, res) => {
//     if (error) {
//       console.log("error", error);
//       result(error, null);
//       return;
//     }
//     if (res.length) {
//       console.log("Found timetable:", res[0]);
//       result(null, res[0]);
//       return;
//     }
//     result({ kind: "not_found" }, null);
//   });
// };

// module.exports = Timetable;
