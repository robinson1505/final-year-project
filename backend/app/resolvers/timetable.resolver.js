import { Timetable, Modules, Venue } from "../models/index.js";

const timetableResolver = {
  Query: {
    getAllTimetable: async () => {
      try {
        const timetable = await Timetable.findAll({
          include: [Modules, Venue]
        });
        return timetable;
      } catch (error) {
        console.error("Error fetching timetable data: ", error);
        throw new Error("Error fetching timetable data");
      }
    },
    getTimetable: async (parent, { id }) => {
      try {
        const timetable = await Timetable.findOne({
          include: [Modules, Venue],
          where: { id }
        });
        return timetable;
      } catch (error) {
        console.error("Error fetching timetable data: ", error);
        throw new Error("Error fetching timetable data");
      }
    }
  },
  Mutation: {
    addTimetable: async (
      parent,
      {
        timetable_code,
        module_day,
        time_in,
        time_out,
        timetable_module,
        timetable_venue
      }
    ) => {
      try {
        const timetable = await Timetable.create({
          timetable_code,
          module_day,
          time_in,
          time_out,
          timetable_module,
          timetable_venue
        });
        return timetable.toJSON();
      } catch (error) {
        console.error("Error there some field are null: ", error);
        throw new Error("Error on Adding Timetable");
      }
    },
    updateTimetable: async (
      parent,
      { id, timetable_code, module_day, time_in, time_out }
    ) => {
      try {
        const timetable = await Timetable.findOne({ where: { id } });
        timetable.update({
          timetable_code,
          module_day,
          time_in,
          time_out
        });
        return timetable;
      } catch (error) {
        console.error("Error there can not find the time table: ", error);
        throw new Error(error);
      }
    },
    deleteTimetable: async (parent, { id }) => {
      try {
        const timetable = await Timetable.findOne({ where: { id } });
        timetable.destroy();
        return true;
      } catch (error) {
        console.error("Error there can not find the Timetable: ", error);
        throw new Error("Error on deleting Timetable");
      }
    }
  }
};

export default timetableResolver;
