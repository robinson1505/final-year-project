const beaconDefs = `
type Beacon{
    id:ID!
    beaconMacAddress:String!
}

extend type Query{
    getAllBeacons:[Beacon]
    getBeacon(id:ID):Beacon
}
`;
export default beaconDefs;
