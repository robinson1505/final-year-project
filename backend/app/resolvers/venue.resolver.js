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
      try {
        const venue = await Venue.create({
          venue_name,
          venue_code,
          venue_capacity
        });
        return venue.toJSON();
      } catch (error) {
        console.error("Error there some field are null: ", error);
        throw new Error("Error on Adding venue");
      }
    },
    updateVenue: async (
      parent,
      { id, venue_name, venue_code, venue_capacity }
    ) => {
      try {
        const venue = await Venue.findOne({ where: { id } });
        venue.update({ venue_name, venue_code, venue_capacity });
        return venue;
      } catch (error) {
        console.error("Error there can not find the venue: ", error);
        throw new Error(error);
      }
    },
    deleteVenue: async (parent, { id }) => {
      try {
        const venue = await Venue.findOne({ where: { id } });
        venue.destroy();
        return true;
      } catch (error) {
        console.error("Error there can not find the venue: ", error);
        throw new Error("Error on deleting venue");
      }
    }
  }
};

export default venueResolver;
