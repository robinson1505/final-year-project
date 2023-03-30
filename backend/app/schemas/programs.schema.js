const programDefs = `
type Program{
    id:ID!
    program_code:String!
    program_name:String!
    nta_level:String!
}
extend type Query{
    getAllPrograms:[Program]
    getProgram(id:ID):Program
}
`;
export default programDefs;
