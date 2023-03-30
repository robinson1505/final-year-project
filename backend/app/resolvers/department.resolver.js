import { Department } from "../models/index.js";

const departmentResolver = {
  Query: {
    getAllDepartments: async () => {
      try {
        const departments = await Department.findAll();
        return departments;
      } catch (error) {
        console.error("Error fetching departments data: ", error);
        throw new Error("Error fetching department data");
      }
    },
    getDepartment: async (parent, { id }) => {
      try {
        const department = await Department.findOne({ where: { id } });
        return department;
      } catch (error) {
        console.error("Error fetching department data: ", error);
        throw new Error("Error fetching department data");
      }
    }
  }
};

export default departmentResolver;
