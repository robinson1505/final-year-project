import {
  Student,
  Programs,
  Enrollment,
  Attendance,
  Modules,
  Timetable,
  Venue,
} from "../models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { GraphQLError } from "graphql";

const saltRounds = 10;

const studentResolver = {
  Query: {
    student: async (parent, args, context, info) => {
      console.log(context.student);
      console.log("context only", context.user.user.id);
      try {
        const id = context.user.user.id;
        console.log(id);
        if (!id) {
          throw new Error("User not authenticated");
        }
        const student = await Student.findOne({
          where: { id },
        });
        return student;
      } catch (error) {
        console.log("Error fetching student: ", error);
        throw new Error(error);
      }
    },

    getAllStudents: async () => {
      try {
        const students = await Student.findAll({
          include: [Programs, Enrollment, Attendance],
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
          { include: [Programs, Enrollment, Attendance] },
          { where: { id } }
        );
        return student;
      } catch (error) {
        console.error("Error fetching student data: ", error);
        throw new Error("Error fetching student data");
      }
    },
    getStudentTimetable: async (id, args, context, info) => {
      console.log(context.student);
      console.log("Student with program id ", context.user.user.id);
      try {
        const id = context.user.user.id;
        if (!id) {
          throw new Error("User not authenticated");
        }
        const enrollment = await Enrollment.findAll({
          where: { student_enrollment: id },
          include: [Student, Modules],
        });
        console.log(
          "Enrollment ID",
          enrollment.map((enrollment) => enrollment.module_enrolled)
        );

        if (enrollment.length > 0) {
          const enrollmentModuleId = enrollment.map(
            (enrollment) => enrollment.module_enrolled
          );
          console.log("Module ID", enrollmentModuleId);
          const timetable = await Timetable.findAll({
            where: { timetable_module: enrollmentModuleId },
            include: [{ model: Modules, include: [Programs] }, Venue],
          });
          return timetable;
        }
      } catch (error) {
        console.log("Error fetching student: ", error);
        throw new Error(error);
      }
    },
  },
  Mutation: {
    addStudent: async (
      parent,
      {
        student_full_name,
        student_registration_number,
        password,
        student_program,
      }
    ) => {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      try {
        const student = await Student.create({
          student_full_name,
          student_registration_number,
          password: hashedPassword,
          student_program,
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
          password: hashedPassword,
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
    },
    loginStudent: async (_, args, context, info) => {
      try {
        const student = await Student.findOne({
          where: {
            student_registration_number: args.student_registration_number,
          },
        });
        if (!student) {
          throw new Error(
            "There are is no student with that student registration number"
          );
        }
        const isMatch = await bcrypt.compare(args.password, student.password);
        if (!isMatch) {
          throw new Error("Invalid credential");
        }
        const token = jwt.sign(
          {
            user: {
              id: student.id,
              username: student.student_registration_number,
            },
          },
          "MyPrivate",
          { expiresIn: "1h" }
        );
        console.log(token);
        return token;
      } catch (error) {
        throw new GraphQLError(error);
      }
    },
  },
};

export default studentResolver;
