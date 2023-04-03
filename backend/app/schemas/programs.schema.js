const programDefs = `
type Program{
    id:ID!
    program_code:String!
    program_name:String!
    nta_level:String!
    department:Department!
    students:[Student!]!
    modules:[Modules!]!
}
extend type Query{
    getAllPrograms:[Program!]!
    getProgram(id:ID):Program!
}
extend type Mutation{
    addProgram( 
        program_name:String!
        program_code:String!
        nta_level:String!
        program_department:ID!
        ):Program!

        updateProgram(
            id:ID!
            program_name: String!
            program_code: String!
            nta_level:String
            ): Program!
        
    deleteProgram(
            id:ID!
            ): Boolean!
}
`;
export default programDefs;
