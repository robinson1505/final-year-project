const timetableDefs = `
type Timetable{
    id:ID!
    timetableCode:String!
    moduleDay:String!
    timeIn:String!
    timeOut:String!
}
extend type Query{
    getAllTimetable:[Timetable]
    getTimetable(id:ID):Timetable
}

`;

export default timetableDefs;
