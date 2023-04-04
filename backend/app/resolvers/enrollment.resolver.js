import { Enrollment, Student, Modules } from "../models/index.js";

const enrollmentResolver = {
  Query: {
    getAllEnrollment: async () => {
      try {
        const enrollments = await Enrollment.findAll({
          include: [Student, Modules]
        });
        return enrollments;
      } catch (error) {
        console.error("Error fetching enrollments data: ", error);
        throw new Error("Error fetching enrollments data");
      }
    },
    getEnrollment: async (parent, { id }) => {
      try {
        const enrollment = await Enrollment.findOne({
          include: [Student, Modules],
          where: { id }
        });
        return enrollment;
      } catch (error) {
        console.error("Error fetching enrollment data: ", error);
        throw new Error("Error fetching enrollment data");
      }
    }
  },
  Mutation: {
    addEnrollment: async (
      parent,
      { semester, academic_year, student_enrollment, module_enrolled }
    ) => {
      try {
        const enrollment = await Enrollment.create({
          semester,
          academic_year,
          student_enrollment,
          module_enrolled
        });
        return enrollment.toJSON();
      } catch (error) {
        console.error("Error there some field are null: ", error);
        throw new Error("Error on Adding  Enrollment");
      }
    },
    updateEnrollment: async (
      parent,
      { id, semester, academic_year, student_enrollment, module_enrolled }
    ) => {
      try {
        const enrollment = await Enrollment.findOne({ where: { id } });
        enrollment.update({
          semester,
          academic_year,
          student_enrollment,
          module_enrolled
        });
        return enrollment;
      } catch (error) {
        console.error("Error there can not find the enrollment: ", error);
        throw new Error(error);
      }
    },
    deleteEnrollment: async (parent, { id }) => {
      try {
        const enrollment = await Enrollment.findOne({ where: { id } });
        enrollment.destroy();
        return true;
      } catch (error) {
        console.error("Error there can not find the enrollment: ", error);
        throw new Error("Error on deleting Enrollment");
      }
    }
  }
};

export default enrollmentResolver;
