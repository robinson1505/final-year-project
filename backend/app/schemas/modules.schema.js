const modulesDefs = `
type Modules{
    id:ID!
    module_name:String!
    module_code:String!
    number_of_students:Int!
    program:Program!
    lecturer:Lecturer!
    timetables:[Timetable!]!
}
extend type Query{
    getAllModules:[Modules]
    getModule(id:ID):Modules
}
extend type Mutation{
    addModule( 
        module_name:String!
        module_code:String!
        number_of_students:Int!
        module_program:ID!
        lecturer_module:ID!
        ):Modules!

        updateModule(
            id:ID!
            module_name:String
            module_code:String
            number_of_student:String
            ): Modules!
        
        deleteModule(
            id:ID!
            ): Boolean!
}

`;
export default modulesDefs;
