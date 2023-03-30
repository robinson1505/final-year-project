const modulesDefs = `
type Modules{
    id:ID!
    moduleName:String!
    moduleCode:String!
    numberOfStudents:Int!
}
extend type Query{
    getAllModules:[Modules]
    getModule(id:ID):Modules
}

`;
export default modulesDefs;
