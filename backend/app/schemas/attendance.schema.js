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
extend type Query{
getAllAttendance:[Attendance]
getAttendance(id:ID):Attendance
}
`;
export default attendanceDefs;
