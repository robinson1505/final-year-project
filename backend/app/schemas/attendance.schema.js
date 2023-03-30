const attendanceDefs = `
enum AttendanceStatus{
    BAD
    SATISFY
    GOOD
    EXCELLENT
}
type Attendance{
id:ID!
attendance_code:String!
attendance_status:AttendanceStatus!
}
extend type Query{
getAllAttendance:[Attendance]
getAttendance(id:ID):Attendance
}
`;
export default attendanceDefs;
