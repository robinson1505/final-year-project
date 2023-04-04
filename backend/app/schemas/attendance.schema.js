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
student:Student!
module:Modules!
timetable:Timetable!

}
extend type Query{
getAllAttendance:[Attendance]
getAttendance(id:ID):Attendance
}
extend type Mutation{
    addAttendance( 
        attendance_code:String!
        attendance_status:AttendanceStatus
        student_attendance:String!
        attendance_module:String!
        attendance_timetable:ID!
        
      
        ):Attendance!

        updateAttendance(
            id:ID!
            attendance_code:String
            attendance_status:AttendanceStatus!
           
            ): Attendance!
        
        deleteAttendance(
            id:ID!
            ): Boolean!
}

`;
export default attendanceDefs;
