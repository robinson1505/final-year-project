const timetableDefs = `
type Timetable{
    id:ID!
    timetable_code:String!
    module_day:String!
    time_in:String!
    time_out:String!
    module:Modules!
    venue:Venue
}
extend type Query{
    getAllTimetable:[Timetable]
    getTimetable(id:ID):Timetable
}
extend type Mutation{
    addTimetable( 
        timetable_code:String!
        module_day:String!
        time_in:String!
        time_out:String!
        timetable_module:ID!
        timetable_venue:ID!
      
        ):Timetable!

        updateTimetable(
            id:ID!
            timetable_code:String
            module_day:String
            time_in:String
            time_out:String
           
            ): Timetable!
        
        deleteTimetable(
            id:ID!
            ): Boolean!
}

`;

export default timetableDefs;
