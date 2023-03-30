import { Lecturer } from "../models/index.js";

const lecturerResolver = {
  Query: {
    getAllLecturers: async () => {
      try {
        const lecturers = await Lecturer.findAll();
        return lecturers;
      } catch (error) {
        console.error("Error fetching lecturers data: ", error);
        throw new Error("Error fetching lecturers data");
      }
    },
    getLecturer: async (parent, { id }) => {
      try {
        const lecturer = await Lecturer.findOne({ where: { id } });
        return lecturer;
      } catch (error) {
        console.error("Error fetching lecturer data: ", error);
        throw new Error("Error fetching lecturer data");
      }
    }
  }
};

export default lecturerResolver;
