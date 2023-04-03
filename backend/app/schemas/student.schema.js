const studentDefs = `
type Student{
    id:ID!
    student_full_name:String!
    student_registration_number:String!
    password:String!
    program:Program!
}
extend type Query{
    getAllStudents:[Student]
    getStudent(id:ID):Student
}
extend type Mutation{
    addStudent(
        student_full_name:String!
        student_registration_number:String!
        password:String!
        student_program:String!
        ):Student!
    updateStudent(
        student_full_name:String
        student_registration_number:String
        password:String
    ):Student!
    deleteStudent(
        id:ID!
        ): Boolean!
}
`;

export default studentDefs;
