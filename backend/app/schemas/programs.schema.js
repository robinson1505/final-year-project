const programDefs = `
type Program{
    id:ID!
    programCode:String!
    programName:String!
    ntaLevel:String!
}
extend type Query{
    getAllPrograms:[Program]
    getProgram(id:ID):Program
}
`;
export default programDefs;
