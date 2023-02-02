const db = require("../config/db.config");

// CONSTRUCTOR
const Venue = function (venue) {
  this.venue_id = venue.venue_id;
  this.venue_name = venue.venue_name;
  this.venue_code = venue.venue_code;
  this.venue_capacity = venue.venue_capacity;
};

Venue.getAllVenue = (result) => {
  let query = "SELECT * FROM venue";
  db.query(query, (error, res) => {
    if (error) {
      console.log("error", error);
      result(null, error);
      return;
    }
    console.log("Venues", res);
    result(null, res);
  });
};
Venue.getVenue = (venueId, result) => {
  let query = "SELECT * FROM venue WHERE venue_id =?";
  db.query(query, [venueId], (error, res) => {
    if (error) {
      console.log("error:", error);
      result(error, null);
      return;
    }
    if (res.length) {
      console.log("Found Venue: ", res[0]);
      result(null, res[0]);
      return;
    }
    // ?Not Found No Venue With The Id
    result({ kind: "not_found" }, null);
  });
};

module.exports = Venue;
