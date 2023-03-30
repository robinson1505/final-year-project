import { Timetable } from "../models/index.js";

const timetableResolver = {
  Query: {
    getAllTimetable: async () => {
      try {
        const timetable = await Timetable.findAll();
        return timetable;
      } catch (error) {
        console.error("Error fetching timetable data: ", error);
        throw new Error("Error fetching timetable data");
      }
    },
    getTimetable: async (parent, { id }) => {
      try {
        const timetable = await Timetable.findOne({ where: { id } });
        return timetable;
      } catch (error) {
        console.error("Error fetching timetable data: ", error);
        throw new Error("Error fetching timetable data");
      }
    }
  }
};

export default timetableResolver;