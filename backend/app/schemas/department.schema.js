const departmentDefs = `
type Department{
    id:ID!
    department_name:String!
    department_code:String!
}
extend type Query{
    getAllDepartments:[Department]
    getDepartment(id:ID):Department
}
`;
export default departmentDefs;
