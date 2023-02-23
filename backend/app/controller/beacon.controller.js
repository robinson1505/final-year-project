const { Beacon } = require("../models");

module.exports = {
  async createBeacon(req, res) {
    try {
      const { beacon_mac_address, beacon_venue } = req.body;
      const beacon = await Beacon.create({ beacon_mac_address, beacon_venue });
      res.status(201).json({ beacon });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

// RETRIEVE ALL BEACONS
// exports.findAllBeacons = (req, res) => {
//   Beacon.getAllBeacons((error, data) => {
//     if (error)
//       res.status(500).send({
//         message:
//           error.message || "Some error occurred while retrieving beacons.",
//       });
//     else res.send(data);
//   });
// };

// exports.findBeacon = (req, res) => {
//   let id = req.params.beaconId;
//   Beacon.getBeacon(id, (error, data) => {
//     if (error) {
//       if (error.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found beacon with id ${req.params.beaconId}.`,
//         });
//       } else {
//         res.status(500).send({
//           message: "Error retrieving Student with id " + req.params.beaconId,
//         });
//       }
//     } else res.send(data);
//   });
// };
