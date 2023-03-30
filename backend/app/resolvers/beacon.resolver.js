import { Beacon } from "../models/index.js";

const beaconResolver = {
  Query: {
    getAllBeacons: async () => {
      try {
        const beacons = await Beacon.findAll();
        return beacons;
      } catch (error) {
        console.error("Error fetching beacons data: ", error);
        throw new Error("Error fetching beacons data");
      }
    },
    getBeacon: async (parent, { id }) => {
      try {
        const beacon = await Beacon.findOne({ where: { id } });
        return beacon;
      } catch (error) {
        console.error("Error fetching beacon data: ", error);
        throw new Error("Error fetching beacon data");
      }
    }
  }
};

export default beaconResolver;
