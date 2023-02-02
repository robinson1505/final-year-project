const Venue = require("../models/venue.model");
// RETRIEVE ALL VENUES
exports.findAllVenues = (req, res) => {
  Venue.getAllVenue((error, data) => {
    if (error) {
      res.status(500).send({
        message:
          error.message || " Some error occurred while retrieving Venues",
      });
    } else res.send(data);
  });
};
exports.findVenue = (req, res) => {
  let id = req.params.venueId;
  Venue.getVenue(id, (error, data) => {
    if (error) {
      if (error.kind === "not_found") {
        res.status(404).send({
          message: `Not found venue with id ${req.params.venueId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving venue with id " + req.params.venueId,
        });
      }
    } else res.send(data);
  });
};
