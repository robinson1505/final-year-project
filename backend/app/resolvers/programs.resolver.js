import { Programs, Department } from "../models/index.js";

const programsResolver = {
  Query: {
    getAllPrograms: async () => {
      try {
        const programs = await Programs.findAll({ include: Department });
        return programs;
      } catch (error) {
        console.error("Error fetching programs data: ", error);
        throw new Error("Error fetching programs data");
      }
    },
    getProgram: async (parent, { id }) => {
      try {
        const program = await Programs.findOne({
          include: { Department },
          where: { id }
        });
        return program;
      } catch (error) {
        console.error("Error fetching program data: ", error);
        throw new Error("Error fetching program data");
      }
    }
  },
  Mutation: {
    addProgram: async (
      parent,
      { program_name, program_code, nta_level, program_department }
    ) => {
      try {
        const program = await Programs.create({
          program_name,
          program_code,
          nta_level,
          program_department
        });
        return program.toJSON();
      } catch (error) {
        console.error("Error there some field are null: ", error);
        throw new Error("Error on Adding program");
      }
    },
    updateProgram: async (
      parent,
      { id, program_name, program_code, nta_level }
    ) => {
      try {
        const program = await Programs.findOne({ where: { id } });
        program.update({ program_name, program_code, nta_level });
        return program;
      } catch (error) {
        console.error("Error there can not find the program: ", error);
        throw new Error(error);
      }
    },
    deleteProgram: async (parent, { id }) => {
      try {
        const program = await Programs.findOne({ where: { id } });
        program.destroy();
        return true;
      } catch (error) {
        console.error("Error there can not find the program: ", error);
        throw new Error("Error on deleting program");
      }
    }
  }
};

export default programsResolver;
