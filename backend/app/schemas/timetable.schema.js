const timetableDefs = `
type Timetable{
    id:ID!
    timetable_code:String!
    module_day:String!
    time_in:String!
    time_out:String!
}
extend type Query{
    getAllTimetable:[Timetable]
    getTimetable(id:ID):Timetable
}

`;

export default timetableDefs;
