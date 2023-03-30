const lecturerDefs = `
type Lecturer{
id:ID!
lectureFullName:String!
lecturerStaffNumber:String!
password:String!
}
extend type Query{
    getAllLecturers:[Lecturer]
    getLecturer(id:ID):Lecturer
}
`;
export default lecturerDefs;
