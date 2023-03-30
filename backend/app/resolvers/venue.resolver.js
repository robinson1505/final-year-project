import { Venue } from "../models/index.js";

const venueResolver = {
  Query: {
    getAllVenues: async () => {
      try {
        const venues = await Venue.findAll();
        return venues;
      } catch (error) {
        console.error("Error fetching venues data: ", error);
        throw new Error("Error fetching venues data");
      }
    },
    getVenue: async (parent, { id }) => {
      try {
        const venue = await Venue.findOne({ where: { id } });
        return venue;
      } catch (error) {
        console.error("Error fetching venue data: ", error);
        throw new Error("Error fetching venue data");
      }
    }
  },
  Mutation: {
    addVenue: async (parent, { venue_name, venue_code, venue_capacity }) => {
      const venue = await Venue.create({ venue_name,venue_code,venue_capacity });
      return venue.toJSON();
    }
  }
};

export default venueResolver;
