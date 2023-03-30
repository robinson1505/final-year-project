import { Enrollment } from "../models/index.js";

const enrollmentResolver = {
  Query: {
    getAllEnrollment: async () => {
      try {
        const enrollments = await Enrollment.findAll();
        return enrollments;
      } catch (error) {
        console.error("Error fetching enrollments data: ", error);
        throw new Error("Error fetching enrollments data");
      }
    },
    getEnrollment: async (parent, { id }) => {
      try {
        const enrollment = await Enrollment.findOne({ where: { id } });
        return enrollment;
      } catch (error) {
        console.error("Error fetching enrollment data: ", error);
        throw new Error("Error fetching enrollment data");
      }
    }
  }
};

export default enrollmentResolver;
