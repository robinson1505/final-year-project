const express = require("express");
const router = require("express").Router();
const student = require("../controller/student.controller");
const venue = require("../controller/venue.controller");
const beacon = require("../controller/beacon.controller");

//========================================  ATTENDANCE ROUTER     ==================================//
//========================================  BEACON ROUTER     ==================================//
router.get("/beacon", beacon.findAllBeacons);
router.get("/beacon/:beaconId", beacon.findBeacon);

//========================================  DEPARTMENT ROUTER     ==================================//
//========================================  LECTURER ROUTER     ==================================//

//========================================  MODULES ROUTER     ==================================//
//========================================  PROGRAMS ROUTER     ==================================//
//========================================  STUDENTS ROUTER     ==================================//
router.get("/", (req, res) => {
  res.send("Fetch data from smart attendance");
});
router.get("/student", student.findAllStudents);
router.get("/student/:studentId", student.findStudent);

//========================================  TIMETABLE ROUTER     ==================================//
//========================================  VENUE ROUTER     ==================================//
router.get("/venue", venue.findAllVenues);
router.get("/venue/:venueId", venue.findVenue);

module.exports = router;
