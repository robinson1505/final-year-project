import { Student } from "../models/index.js";

const studentResolver = {
  Query: {
    getAllStudents: async () => {
      try {
        const students = await Student.findAll();
        return students;
      } catch (error) {
        console.error("Error fetching students data: ", error);
        throw new Error("Error fetching students data");
      }
    },
    getStudent: async (parent, { id }) => {
      try {
        const student = await Student.findOne({ where: { id } });
        return student;
      } catch (error) {
        console.error("Error fetching student data: ", error);
        throw new Error("Error fetching student data");
      }
    }
  }
};

export default studentResolver;
