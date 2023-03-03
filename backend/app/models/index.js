const Sequelize = require("sequelize");
const sequelize = require("../config/db.config");
const AttendanceModel = require("./tables/attendance.model");
const BeaconModel = require("./tables/beacon.model");
const DepartmentModel = require("./tables/department.model");
const LecturerModel = require("./tables/lecturer.model");
const ModulesModel = require("./tables/modules.model");
const ProgramsModel = require("./tables/programs.model");
const StudentModel = require("./tables/student.model");
const TimetableModel = require("./tables/timetable.models");
const VenueModel = require("./tables/venue.model");

const Attendance = AttendanceModel(sequelize, Sequelize);
const Beacon = BeaconModel(sequelize, Sequelize);
const Department = DepartmentModel(sequelize, Sequelize);
const Lecturer = LecturerModel(sequelize, Sequelize);
const Modules = ModulesModel(sequelize, Sequelize);
const Programs = ProgramsModel(sequelize, Sequelize);
const Student = StudentModel(sequelize, Sequelize);
const Timetable = TimetableModel(sequelize, Sequelize);
const Venue = VenueModel(sequelize, Sequelize);

Venue.hasOne(Beacon, { foreignKey: "beacon_venue" });
Beacon.belongsTo(Venue, { foreignKey: "beacon_venue" });

Department.hasMany(Lecturer, { foreignKey: "lecturer_department" });
Lecturer.belongsTo(Department, { foreignKey: "lecturer_department" });

Department.hasMany(Programs, { foreignKey: "program_department" });
Programs.belongsTo(Department, { foreignKey: "program_department" });

Programs.hasMany(Student, { foreignKey: "student_program" });
Student.belongsTo(Programs, { foreignKey: "student_program" });

Programs.hasMany(Modules, { foreignKey: "module_program" });
Modules.belongsTo(Programs, { foreignKey: "module_program" });

Modules.hasMany(Timetable, { foreignKey: "timetable_module" });
Timetable.belongsTo(Modules, { foreignKey: "timetable_module" });

Venue.hasMany(Timetable, { foreignKey: "timetable_venue" });
Timetable.belongsTo(Venue, { foreignKey: "timetable_venue" });

Lecturer.hasMany(Timetable, { foreignKey: "timetable_lecturer" });
Timetable.belongsTo(Lecturer, { foreignKey: "timetable_lecturer" });

Student.hasMany(Attendance, { foreignKey: "student_attendance" });
Attendance.belongsTo(Student, { foreignKey: "student_attendance" });

Modules.hasMany(Attendance, { foreignKey: "attendance_module" });
Attendance.belongsTo(Modules, { foreignKey: "attendance_module" });

Timetable.hasMany(Attendance, { foreignKey: "attendance_timetable" });
Attendance.belongsTo(Timetable, { foreignKey: "attendance_timetable" });

module.exports = {
  Attendance,
  Beacon,
  Department,
  Lecturer,
  Modules,
  Programs,
  Student,
  Timetable,
  Venue

  // sequelize
};
