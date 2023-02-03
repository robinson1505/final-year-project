const db = require("../config/db.config");

const Timetable = function (timetable) {
  this.timetable_id = timetable.timetable_id;
  this.timetable_code = timetable.timetable_code;
  this.timetable_module = timetable.timetable_module;
  this.timetable_venue = timetable.timetable_venue;
  this.timetable_lecturer = timetable.timetable_lecturer;
  this.module_day = timetable.module_day;
  this.time_in = timetable.time_in;
  this.time_out = timetable.time_out;
};
Timetable.getAllTimetable = (result) => {
  let query = " SELECT * FROM timetable";

  db.query(query, (error, res) => {
    if (error) {
      console.log("error:", error);
      result(error, null);
      return;
    }
    console.log("timetable:", res);
    result(null, res);
  });
};

Timetable.getTimetable = (timetableId, result) => {
  let query = " SELECT * FROM timetable WHERE timetable_id =?";

  db.query(query, [timetableId], (error, res) => {
    if (error) {
      console.log("error", error);
      result(error, null);
      return;
    }
    if (res.length) {
      console.log("Found timetable:", res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};

module.exports = Timetable;
