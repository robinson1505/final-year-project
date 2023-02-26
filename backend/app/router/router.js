const express = require("express");
const router = express.Router();
const attendance = require("../controller/attendance.controller");
const beacon = require("../controller/beacon.controller");
const department = require("../controller/department.controller");
const lecturer = require("../controller/lecturer.controller.js");
const modules = require("../controller/modules.controller");
const program = require("../controller/programs.controller");
const student = require("../controller/student.controller");
const timetable = require("../controller/timetable.controller");
const venue = require("../controller/venue.controller");
//* CREATE QUERIES
router.post("/attendance", attendance.createAttendance);
router.post("/beacon", beacon.createBeacon);
router.post("/department", department.createDepartment);
router.post("/lecturer", lecturer.createLecturer);
router.post("/module", modules.createModules);
router.post("/program", program.createProgram);
router.post("/student", student.createStudent);
router.post("/timetable", timetable.createTimetable);
router.post("/venue", venue.createVenue);

// * GETTING ALL
router.get("/attendance", attendance.getAttendance);
router.get("/beacon", beacon.getBeacon);
router.get("/department", department.getDepartment);
router.get("/lecturer", lecturer.getLecturer);
router.get("/modules", modules.getModules);
router.get("/programs", program.getPrograms);
router.get("/student", student.getStudent);
router.get("/timetable", timetable.getTimetable);
router.get("/venue", venue.getVenue);

// //========================================  ATTENDANCE ROUTER     ==================================//
// router.get("/attendance", attendance.findAllAttendance);
// router.get("/attendance/:attendanceId", attendance.findAttendance);
// //========================================  BEACON ROUTER     ==================================//
// router.get("/beacon", beacon.findAllBeacons);
// router.get("/beacon/:beaconId", beacon.findBeacon);

// //========================================  DEPARTMENT ROUTER     ==================================//
// router.get("/department", department.findAllDepartment);
// router.get("/department/:departmentId", department.findDepartment);

// //========================================  LECTURER ROUTER     ==================================//
// router.get("/lecturer", lecturer.findAllLecturers);
// router.get("/lecturer/:lecturerId", lecturer.findLecturer);

// //========================================  MODULES ROUTER     ==================================//
// router.get("/module", modules.findAllModules);
// router.get("/module/:moduleId", modules.findModule);
// //========================================  PROGRAMS ROUTER     ==================================//
// router.get("/program", program.findAllPrograms);
// router.get("/program/:programId", program.findProgram);
// //========================================  STUDENTS ROUTER     ==================================//
// router.get("/", (req, res) => {
//   res.send("Fetch data from smart attendance");
// });
// router.get("/student", student.findAllStudents);
// router.get("/student/:studentId", student.findStudent);

// //========================================  TIMETABLE ROUTER     ==================================//
// router.get("/timetable", timetable.findAllTimetable);
// router.get("/timetable/:timetableId", timetable.findTimetable);
// //========================================  VENUE ROUTER     ==================================//
// router.get("/venue", venue.findAllVenues);
// router.get("/venue/:venueId", venue.findVenue);

module.exports = router;
