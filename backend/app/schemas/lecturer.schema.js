const lecturerDefs = `
type Lecturer{
id:ID!
lecture_full_name:String!
lecturer_staff_number:String!
password:String!
}
extend type Query{
    getAllLecturers:[Lecturer]
    getLecturer(id:ID):Lecturer
}
`;
export default lecturerDefs;
