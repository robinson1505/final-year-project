const programDefs = `
type Program{
    id:ID!
    program_code:String!
    program_name:String!
    nta_level:String!
    department:Department
}
extend type Query{
    getAllPrograms:[Program]
    getProgram(id:ID):Program
}
extend type Mutation{
    addProgram( 
        program_name:String!
        program_code:String!
        nta_level:String!
        program_department:ID!):Program
}
`;
export default programDefs;
