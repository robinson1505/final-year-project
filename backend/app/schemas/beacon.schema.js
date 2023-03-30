const beaconDefs = `
type Beacon{
    id:ID!
    beacon_mac_address:String!
    
}

extend type Query{
    getAllBeacons:[Beacon]
    getBeacon(id:ID):Beacon
}
`;
export default beaconDefs;
