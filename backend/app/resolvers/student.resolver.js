import { Student, Programs, Enrollment,Attendance } from "../models/index.js";
import bcrypt from "bcrypt";
const saltRounds = 10;

const studentResolver = {
  Query: {
    getAllStudents: async () => {
      try {
        const students = await Student.findAll({
          include: [Programs, Enrollment,Attendance]
        });
        return students;
      } catch (error) {
        console.error("Error fetching students data: ", error);
        throw new Error("Error fetching students data");
      }
    },
    getStudent: async (parent, { id }) => {
      try {
        const student = await Student.findOne(
          { include: [Programs, Enrollment,Attendance] },
          { where: { id } }
        );
        return student;
      } catch (error) {
        console.error("Error fetching student data: ", error);
        throw new Error("Error fetching student data");
      }
    }
  },
  Mutation: {
    addStudent: async (
      parent,
      {
        student_full_name,
        student_registration_number,
        password,
        student_program
      }
    ) => {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      try {
        const student = await Student.create({
          student_full_name,
          student_registration_number,
          password: hashedPassword,
          student_program
        });
        return student;
      } catch (error) {
        console.error("Error there some field are null: ", error);
        throw new Error("Error on Adding  Student");
      }
    },
    updateStudent: async (
      parent,
      { id, student_full_name, student_registration_number, password }
    ) => {
      try {
        const student = await Student.findOne({ where: { id } });
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        student.update({
          student_full_name,
          student_registration_number,
          password: hashedPassword
        });
        return student;
      } catch (error) {
        console.error("Error there can not find the student: ", error);
        throw new Error("Error on update student");
      }
    },
    deleteStudent: async (parent, { id }) => {
      try {
        const student = await Student.findOne({ where: { id } });
        student.destroy();
        return true;
      } catch (error) {
        console.error("Error there can not find the student: ", error);
        throw new Error("Error on deleting student");
      }
    }
  }
};

export default studentResolver;
