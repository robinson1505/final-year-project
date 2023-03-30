import attendanceDefs from "./attendance.schema.js";
import beaconDefs from "./beacon.schema.js";
import departmentDefs from "./department.schema.js";
import enrollmentDefs from "./enrollment.schema.js";
import lecturerDefs from "./lecturer.schema.js";
import modulesDefs from "./modules.schema.js";
import programDefs from "./programs.schema.js";
import root from "./root.js";
import studentDefs from "./student.schema.js";
import timetableDefs from "./timetable.schema.js";
import venueDefs from "./venue.schema.js";

const typeDefs = [
  attendanceDefs,
  beaconDefs,
  departmentDefs,
  enrollmentDefs,
  lecturerDefs,
  modulesDefs,
  programDefs,
  root,
  studentDefs,
  timetableDefs,
  venueDefs
];

export default typeDefs;
