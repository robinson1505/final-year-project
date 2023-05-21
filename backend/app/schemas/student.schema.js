const studentDefs = `
type Student{
    id:ID!
    student_full_name:String!
    student_registration_number:String!
    password:String!
    program:Program!
    enrollments:[Enrollment!]!
    attendances:[Attendance!]!
}
extend type Query{
    getAllStudents:[Student]
    student:Student!
    getStudent(id:ID):Student
    getStudentTimetable:[Timetable]
}
extend type Mutation{
    addStudent(
        student_full_name:String!
        student_registration_number:String!
        password:String!
        student_program:String!
        ):Student!
    updateStudent(
        id:ID!
        student_full_name:String
        student_registration_number:String
        password:String
    ):Student!
    deleteStudent(
        id:ID!
        ): Boolean!
    loginStudent(
        student_registration_number :String!
        password:String!
            ):String!
}
`;

export default studentDefs;
