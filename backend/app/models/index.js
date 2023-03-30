import DataTypes from "sequelize";
import sequelize from "../config/db.config.js";
import AttendanceModel from "./tables/attendance.model.js";
import BeaconModel from "./tables/beacon.model.js";
import DepartmentModel from "./tables/department.model.js";
import EnrollmentModel from "./tables/enrollment.model.js";
import LecturerModel from "./tables/lecturer.model.js";
import ModulesModel from "./tables/modules.model.js";
import ProgramsModel from "./tables/programs.model.js";
import StudentModel from "./tables/student.model.js";
import TimetableModel from "./tables/timetable.model.js";
import VenueModel from "./tables/venue.model.js";

const Attendance = AttendanceModel(sequelize, DataTypes);
const Beacon = BeaconModel(sequelize, DataTypes);
const Department = DepartmentModel(sequelize, DataTypes);
const Enrollment = EnrollmentModel(sequelize, DataTypes);
const Lecturer = LecturerModel(sequelize, DataTypes);
const Modules = ModulesModel(sequelize, DataTypes);
const Programs = ProgramsModel(sequelize, DataTypes);
const Student = StudentModel(sequelize, DataTypes);
const Timetable = TimetableModel(sequelize, DataTypes);
const Venue = VenueModel(sequelize, DataTypes);

Venue.hasOne(Beacon, { foreignKey: "beacon_venue" });
Beacon.belongsTo(Venue, { foreignKey: "beacon_venue" });

Department.hasMany(Lecturer, { foreignKey: "lecturer_department" });
Lecturer.belongsTo(Department, { foreignKey: "lecturer_department" });

Department.hasMany(Programs, { foreignKey: "program_department" });
Programs.belongsTo(Department, { foreignKey: "program_department" });

Student.hasMany(Enrollment, { foreignKey: "student_enrollment" });
Enrollment.belongsTo(Student, { foreignKey: "student_enrollment" });

Modules.hasMany(Enrollment, { foreignKey: "module_enrolled" });
Enrollment.belongsTo(Modules, { foreignKey: "module_enrolled" });

Programs.hasMany(Student, { foreignKey: "student_program" });
Student.belongsTo(Programs, { foreignKey: "student_program" });

Programs.hasMany(Modules, { foreignKey: "module_program" });
Modules.belongsTo(Programs, { foreignKey: "module_program" });

Lecturer.hasMany(Modules, { foreignKey: "lecturer_module" });
Modules.belongsTo(Lecturer, { foreignKey: "lecturer_module" });

Modules.hasMany(Timetable, { foreignKey: "timetable_module" });
Timetable.belongsTo(Modules, { foreignKey: "timetable_module" });

Venue.hasMany(Timetable, { foreignKey: "timetable_venue" });
Timetable.belongsTo(Venue, { foreignKey: "timetable_venue" });

Student.hasMany(Attendance, { foreignKey: "student_attendance" });
Attendance.belongsTo(Student, { foreignKey: "student_attendance" });

Modules.hasMany(Attendance, { foreignKey: "attendance_module" });
Attendance.belongsTo(Modules, { foreignKey: "attendance_module" });

Timetable.hasMany(Attendance, { foreignKey: "attendance_timetable" });
Attendance.belongsTo(Timetable, { foreignKey: "attendance_timetable" });

export  {
  Attendance,
  Beacon,
  Department,
  Enrollment,
  Lecturer,
  Modules,
  Programs,
  Student,
  Timetable,
  Venue
};
