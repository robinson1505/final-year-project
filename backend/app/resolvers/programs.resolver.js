import { Programs } from "../models/index.js";

const programsResolver = {
  Query: {
    getAllPrograms: async () => {
      try {
        const programs = await Programs.findAll();
        return programs;
      } catch (error) {
        console.error("Error fetching programs data: ", error);
        throw new Error("Error fetching programs data");
      }
    },
    getProgram: async (parent, { id }) => {
      try {
        const program = await Programs.findOne({ where: { id } });
        return program;
      } catch (error) {
        console.error("Error fetching program data: ", error);
        throw new Error("Error fetching program data");
      }
    }
  }
};

export default programsResolver;
