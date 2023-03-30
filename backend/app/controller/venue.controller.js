import { Venue } from "../models";

export async function createVenue(req, res) {
  try {
    const { venue_name, venue_code, venue_capacity } = req.body;
    const venue = await Venue.create({
      venue_name,
      venue_code,
      venue_capacity
    });
    res
      .status(201)
      .json({ message: "Venue creates Success...", data: venue });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
export async function getVenue(req, res) {
  try {
    const venue = await Venue.findAll();
    res.status(200).json({ venue });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
}

// // RETRIEVE ALL VENUES
// exports.findAllVenues = (req, res) => {
//   Venue.getAllVenue((error, data) => {
//     if (error) {
//       res.status(500).send({
//         message: error.message || " Some error occurred while retrieving Venues"
//       });
//     } else res.send(data);
//   });
// };

// exports.findVenue = (req, res) => {
//   let id = req.params.venueId;
//   Venue.getVenue(id, (error, data) => {
//     if (error) {
//       if (error.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found venue with id ${req.params.venueId}.`
//         });
//       } else {
//         res.status(500).send({
//           message: "Error retrieving venue with id " + req.params.venueId
//         });
//       }
//     } else res.send(data);
//   });
// };
