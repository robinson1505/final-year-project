const express = require("express");
const router = require("express").Router();
const attendance = require("../controller/attendance.controller")
const beacon = require("../controller/beacon.controller");
const department = require("../controller/department.controller");
const lecturer = require("../controller/lecturer.controller.js");
const modules =require("../controller/modules.controller")
const program =require("../controller/programs.controller")
const student = require("../controller/student.controller");
const timetable= require("../controller/timetable.controller")
const venue = require("../controller/venue.controller");


//========================================  ATTENDANCE ROUTER     ==================================//
router.get("/attendance", attendance.findAllAttendance);
router.get("/attendance/:attendanceId", attendance.findAttendance);
//========================================  BEACON ROUTER     ==================================//
router.get("/beacon", beacon.findAllBeacons);
router.get("/beacon/:beaconId", beacon.findBeacon);

//========================================  DEPARTMENT ROUTER     ==================================//
router.get("/department", department.findAllDepartment);
router.get("/department/:departmentId", department.findDepartment);

//========================================  LECTURER ROUTER     ==================================//
router.get("/lecturer", lecturer.findAllLecturers);
router.get("/lecturer/:lecturerId", lecturer.findLecturer);

//========================================  MODULES ROUTER     ==================================//
router.get("/module", modules.findAllModules);
router.get("/module/:moduleId", modules.findModule);
//========================================  PROGRAMS ROUTER     ==================================//
router.get("/program", program.findAllPrograms);
router.get("/program/:programId", program.findProgram);
//========================================  STUDENTS ROUTER     ==================================//
router.get("/", (req, res) => {
  res.send("Fetch data from smart attendance");
});
router.get("/student", student.findAllStudents);
router.get("/student/:studentId", student.findStudent);

//========================================  TIMETABLE ROUTER     ==================================//
router.get("/timetable", timetable.findAllTimetable);
router.get("/timetable/:timetableId", timetable.findTimetable);
//========================================  VENUE ROUTER     ==================================//
router.get("/venue", venue.findAllVenues);
router.get("/venue/:venueId", venue.findVenue);

module.exports = router;
