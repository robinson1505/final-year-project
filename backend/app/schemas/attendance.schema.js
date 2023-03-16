const attendanceDefs = `
enum AttendanceStatus{
    BAD
    SATISFY
    GOOD
    EXCELLENT
}
type Attendance{
id:ID!
attendanceCode:String!
attendanceStatus:AttendanceStatus!
}
`;
module.exports = attendanceDefs;
