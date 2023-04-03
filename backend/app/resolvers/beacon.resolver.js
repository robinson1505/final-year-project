import { Beacon, Venue } from "../models/index.js";

const beaconResolver = {
  Query: {
    getAllBeacons: async () => {
      try {
        const beacons = await Beacon.findAll({ include: Venue });
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
  },
  Mutation: {
    addBeacon: async (parent, { beacon_mac_address, beacon_venue }) => {
      try {
        const beacon = await Beacon.create({
          beacon_mac_address,
          beacon_venue
        });
        return beacon.toJSON();
      } catch (error) {
        console.error("Error there some field are null: ", error);
        throw new Error("Error on Adding  beacon");
      }
    },
    updateBeacon: async (parent, { id, beacon_mac_address }) => {
      try {
        const beacon = await Beacon.findOne({ where: { id } });
        beacon.update({ beacon_mac_address });
        return beacon;
      } catch (error) {
        console.error("Error there can not find the beacon: ", error);
        throw new Error(error);
      }
    },
    deleteBeacon: async (parent, { id }) => {
      try {
        const beacon = await Beacon.findOne({ where: { id } });
        beacon.destroy();
        return true;
      } catch (error) {
        console.error("Error there can not find the beacon: ", error);
        throw new Error("Error on deleting beacon");
      }
    }
  }
};

export default beaconResolver;
