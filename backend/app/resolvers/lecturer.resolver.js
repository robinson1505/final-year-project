import { Lecturer, Department, Modules } from "../models/index.js";
import bcrypt from "bcrypt";
const saltRounds = 10;

const lecturerResolver = {
  Query: {
    getAllLecturers: async () => {
      try {
        const lecturers = await Lecturer.findAll({
          include: [Department, Modules]
        });
        return lecturers;
      } catch (error) {
        console.error("Error fetching lecturers data: ", error);
        throw new Error("Error fetching lecturers data");
      }
    },
    getLecturer: async (parent, { id }) => {
      try {
        const lecturer = await Lecturer.findOne({
          include: [Department, Modules],
          where: { id }
        });
        return lecturer;
      } catch (error) {
        console.error("Error fetching lecturer data: ", error);
        throw new Error("Error fetching lecturer data");
      }
    }
  },
  Mutation: {
    addLecturer: async (
      parent,
      {
        lecturer_full_name,
        lecturer_staff_number,
        password,
        lecturer_department
      }
    ) => {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      try {
        const lecturer = await Lecturer.create({
          lecturer_full_name,
          lecturer_staff_number,
          password: hashedPassword,
          lecturer_department
        });
        return lecturer;
      } catch (error) {
        console.error("Error there some field are null: ", error);
        throw new Error("Error on Adding Lecturer");
      }
      r;
    },
    updateLecturer: async (
      parent,
      { id, lecturer_full_name, lecturer_staff_number, password }
    ) => {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      try {
        const lecturer = await Lecturer.findOne({ where: { id } });

        student.update({
          lecturer_full_name,
          lecturer_staff_number,
          password: hashedPassword
        });
        return lecturer;
      } catch (error) {
        console.error("Error there can not find the lecturer: ", error);
        throw new Error("Error on update lecturer");
      }
    },
    deleteLecturer: async (parent, { id }) => {
      try {
        const lecturer = await Lecturer.findOne({ where: { id } });
        lecturer.destroy();
        return true;
      } catch (error) {
        console.error("Error there can not find the lecturer: ", error);
        throw new Error("Error on deleting lecturer");
      }
    }
  }
};

export default lecturerResolver;
