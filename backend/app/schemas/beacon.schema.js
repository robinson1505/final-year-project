const beaconDefs = `
type Beacon{
    id:ID!
    beacon_mac_address:String!
    venue:Venue!
    
}

extend type Query{
    getAllBeacons:[Beacon]
    getBeacon(id:ID!):Beacon
}
extend type Mutation{
    addBeacon(
        beacon_mac_address: String!
        beacon_venue: String!
        ): Beacon!

    updateBeacon(
            id:ID!
            beacon_mac_address: String!
          
            ): Beacon!
        
    deleteBeacon(
            id:ID!
            ): Boolean!
        
}
`;
export default beaconDefs;
