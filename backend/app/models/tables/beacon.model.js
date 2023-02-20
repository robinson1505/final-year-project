module.exports = (sequelize, DataTypes) => {
  const Beacon = sequelize.define("beacon", {
    id: {
      allowNull:false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    beacon_mac_address: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{timestamps: false});
  return Beacon;
};


// const db = require("../config/db.config");

// // CREATE A CONSTRUCTOR
// const Beacon = function(beacon) {
//   // this.beacon_id = beacon.beacon_id;
//   // this.beacon_mac_address = beacon.beacon_mac_address;
//   // *FOREIGN KEY from venue
//   // this.beacon_venue = beacon.beacon_venue;
// };

// Beacon.getAllBeacons = result => {
//   let query =
//     "SELECT beacon.beacon_id,beacon.beacon_mac_address,venue.venue_name,venue.venue_code,venue.venue_capacity FROM beacon INNER JOIN venue ON beacon.beacon_venue = venue.venue_code";

//   db.query(query, (error, res) => {
//     if (error) {
//       console.log("error: ", error);
//       result(null, error);
//       return;
//     }
//     console.log("beacon: ", res);
//     result(null, res);
//   });
// };

// Beacon.getBeacon = (beaconId, result) => {
//   let query =
//     "SELECT beacon.beacon_id,beacon.beacon_mac_address,venue.venue_name,venue.venue_code,venue.venue_capacity FROM beacon INNER JOIN venue ON beacon.beacon_venue = venue.venue_code WHERE beacon_id =?";
//   db.query(query, [beaconId], (error, res) => {
//     if (error) {
//       console.log("error: ", error);
//       result(error, null);
//       return;
//     }
//     if (res.length) {
//       console.log("Found Beacon: ", res[0]);
//       result(null, res[0]);
//       return;
//     }

//     //? not found Student with the id
//     result({ kind: "not_found" }, null);
//   });
// };

// module.exports = Beacon;
