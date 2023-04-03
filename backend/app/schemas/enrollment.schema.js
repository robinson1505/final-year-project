const enrollmentDefs = `
type Enrollment{
    id:ID!
    semester:Int!
    academic:String!
    student:Student!
    module:Modules!
}
extend type Query{
    getAllEnrollment:[Enrollment]
    getEnrollment(id:ID):Enrollment
}
extend type Mutation{
    addEnrollment( 
        semester:String!
        academic_year:String!
        student_enrollment:ID!
        module_enrolled:ID!
      
        ):Enrollment!

        updateEnrollment(
            id:ID!
            semester:String!
            academic_year:String!
           
            ): Enrollment!
        
        deleteEnrollment(
            id:ID!
            ): Boolean!
}
`;
export default enrollmentDefs;
