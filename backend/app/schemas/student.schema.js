const studentDefs = `
type Student{
    id:ID!
    student_fullName:String!
    student_registration_number:String!
    password:String!
}
extend type Query{
    getAllStudents:[Student]
    getStudent(id:ID):Student
}
`;

export default studentDefs;
