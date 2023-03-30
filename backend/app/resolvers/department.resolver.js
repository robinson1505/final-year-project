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
  },
  Mutation: {
    addDepartment: async (parent, { department_name, department_code }) => {
      try {
        const department = await Department.create({
          department_name,
          department_code
        });
        return department.toJSON();
      } catch (error) {
        console.error("Error there some field are null: ", error);
        throw new Error("Error on Adding department");
      }
    },
    updateDepartment: async (
      parent,
      { id, department_name, department_code }
    ) => {
      try {
        const department = await Department.findOne({ where: { id } });
        department.update({ department_name, department_code });
        return department;
      } catch (error) {
        console.error("Error there can not find the department: ", error);
        throw new Error(error);
      }
    },
    deleteDepartment: async (parent, { id }) => {
      try {
        const department = await Department.findOne({ where: { id } });
        department.destroy();
        return true;
      } catch (error) {
        console.error("Error there can not find the department: ", error);
        throw new Error("Error on deleting department");
      }
    }
  }
};

export default departmentResolver;
