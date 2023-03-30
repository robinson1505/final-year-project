const departmentDefs = `
type Department{
    id:ID!
    departmentName:String!
    departmentCode:String!
}
extend type Query{
    getAllDepartments:[Department]
    getDepartment(id:ID):Department
}
`;
export default departmentDefs;
