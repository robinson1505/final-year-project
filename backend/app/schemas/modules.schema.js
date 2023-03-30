const modulesDefs = `
type Modules{
    id:ID!
    module_name:String!
    module_code:String!
    number_of_students:Int!
}
extend type Query{
    getAllModules:[Modules]
    getModule(id:ID):Modules
}

`;
export default modulesDefs;
