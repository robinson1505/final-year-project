const lecturerDefs = `
type Lecturer{
id:ID!
lecture_full_name:String!
lecturer_staff_number:String!
password:String!
department:Department!
}
extend type Query{
    getAllLecturers:[Lecturer]
    getLecturer(id:ID):Lecturer
}
extend type Mutation{
    addLecturer(
        lecturer_full_name:String!
        lecturer_staff_number:String!
        password:String!
        lecturer_Department:String!
        ):Lecturer!
    updateLecturer(
        lecturer_full_name:String
        lecturer_staff_number:String
        password:String
    ):Lecturer!
    deleteLecturer(
        id:ID!
        ): Boolean!
}
`;
export default lecturerDefs;
