const studentDefs = `
type Student{
    id:ID!
    studentFullName:String!
    studentRegistrationNumber:String!
    password:String!
}
extend type Query{
    getAllStudents:[Student]
    getStudent(id:ID):Student
}
`;

export default studentDefs;
