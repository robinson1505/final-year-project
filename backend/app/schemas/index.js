const attendanceDefs = require("./attendance.schema");
const beaconDefs = require("./beacon.schema");
const departmentDefs = require("./department.schema");
const enrollmentDefs = require("./enrollment.schema");
const lecturerDefs = require("./lecturer.schema");
const modulesDefs = require("./modules.schema");
const programsDefs = require("./attendance.schema");
const studentDefs = require("./student.schema");
const timetableDefs = require("./timetable.schema");
const venueDefs = require("./venue.schema");

const linkDefs = `
type Query{
    _:Boolean
}
type Mutation{
    _:Boolean
}
type Subscription{
    _:Boolean
}
`;

module.exports = [
  attendanceDefs,
  beaconDefs,
  departmentDefs,
  enrollmentDefs,
  lecturerDefs,
  linkDefs,
  modulesDefs,
  programsDefs,
  studentDefs,
  timetableDefs,
  venueDefs
];
