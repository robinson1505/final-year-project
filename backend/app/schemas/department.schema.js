const departmentDefs = `
type Department{
    id:ID!
    department_name:String!
    department_code:String!
    programs:[Program!]!
}
extend type Query{
    getAllDepartments:[Department]
    getDepartment(id:ID!):Department
}
extend type Mutation{
    addDepartment(
        department_name: String!
        department_code: String!
      
        ): Department!
        updateDepartment(
            id:ID!
            department_name: String!
            department_code: String!
           
            ): Department!

            deleteDepartment(
                id:ID!
                ): Boolean!
            
    }
`;
export default departmentDefs;
