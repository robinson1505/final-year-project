const enrollmentDefs = `
type Enrollment{
    id:ID!
    semester:Int!
    academic:String!
}
extend type Query{
    getAllEnrollment:[Enrollment]
    getEnrollment(id:ID):Enrollment
}
`;
export default enrollmentDefs;
