import attendanceResolver from "./attendance.resolver.js";
import beaconResolver from "./beacon.resolver.js";
import departmentResolver from "./department.resolver.js";
import enrollmentResolver from "./enrollment.resolver.js";
import lecturerResolver from "./lecturer.resolver.js";
import modulesResolver from "./modules.resolver.js";
import programsResolver from "./programs.resolver.js";
import studentResolver from "./student.resolver.js";
import timetableResolver from "./timetable.resolver.js";
import venueResolver from "./venue.resolver.js";

const resolvers = [
  attendanceResolver,
  beaconResolver,
  departmentResolver,
  enrollmentResolver,
  lecturerResolver,
  modulesResolver,
  programsResolver,
  studentResolver,
  timetableResolver,
  venueResolver
];

export default resolvers;
