import { Modules } from "../models/index.js";

const modulesResolver = {
  Query: {
    getAllModules: async () => {
      try {
        const modules = await Modules.findAll();
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
  }
};

export default modulesResolver;
