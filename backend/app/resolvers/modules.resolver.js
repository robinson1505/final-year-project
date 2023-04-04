import { Modules, Programs, Lecturer } from "../models/index.js";

const modulesResolver = {
  Query: {
    getAllModules: async () => {
      try {
        const modules = await Modules.findAll({
          include: [Programs, Lecturer]
        });
        return modules;
      } catch (error) {
        console.error("Error fetching modules data: ", error);
        throw new Error("Error fetching modules data");
      }
    },
    getModule: async (parent, { id }) => {
      try {
        const modules = await Modules.findOne({ where: { id } });
        return modules;
      } catch (error) {
        console.error("Error fetching module data: ", error);
        throw new Error("Error fetching module data");
      }
    }
  },
  Mutation: {
    addModule: async (
      parent,
      {
        module_name,
        module_code,
        number_of_students,
        module_program,
        lecturer_module
      }
    ) => {
      try {
        const modules = await Modules.create({
          module_name,
          module_code,
          number_of_students,
          module_program,
          lecturer_module
        });
        return modules.toJSON();
      } catch (error) {
        console.error("Error there some field are null: ", error);
        throw new Error("Error on Adding  modules");
      }
    },
    updateModule: async (
      parent,
      { id, module_name, module_code, number_of_students }
    ) => {
      try {
        const modules = await Modules.findOne({ where: { id } });
        modules.update({
          module_name,
          module_code,
          number_of_students
        });
        return modules;
      } catch (error) {
        console.error("Error there can not find the modules: ", error);
        throw new Error(error);
      }
    },
    deleteModule: async (parent, { id }) => {
      try {
        const modules = await Modules.findOne({ where: { id } });
        modules.destroy();
        return true;
      } catch (error) {
        console.error("Error there can not find the beacon: ", error);
        throw new Error("Error on deleting beacon");
      }
    }
  }
};

export default modulesResolver;
