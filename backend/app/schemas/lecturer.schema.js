const lecturerDefs = `
type Lecturer{
id:ID!
lecturer_full_name:String!
lecturer_staff_number:String!
password:String!
department:Department!
modules:[Modules!]!
}
extend type Query{
    getAllLecturers:[Lecturer]
    getLecturer(id:ID):Lecturer
    me:Lecturer!
    getLecturerTimetable:[Timetable]
}

extend type Mutation{
    addLecturer(
        lecturer_full_name:String!
        lecturer_staff_number:String!
        password:String!
        lecturer_department:String!
        ):Lecturer!
    updateLecturer(
        id:ID!
        lecturer_full_name:String
        lecturer_staff_number:String
        password:String
    ):Lecturer!
    deleteLecturer(
        id:ID!
        ): Boolean!
    login(
        lecturer_staff_number :String!
        password:String!
        ):String!
}
`;
export default lecturerDefs;

