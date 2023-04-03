const venueDefs = `
type Venue{
    id:ID!
    venue_name:String!
    venue_code:String!
    venue_capacity:Int!
}

extend type Query{
    getAllVenues:[Venue]
    getVenue(id:ID!): Venue!
}

extend type Mutation{
    addVenue(
        venue_name: String!
        venue_code: String!
        venue_capacity:Int!
        ): Venue!

    updateVenue(
            id:ID!
            venue_name: String!
            venue_code: String!
            venue_capacity:Int!
            ): Venue!
        
    deleteVenue(
            id:ID!
            ): Boolean!
        
}

`;
export default venueDefs;
