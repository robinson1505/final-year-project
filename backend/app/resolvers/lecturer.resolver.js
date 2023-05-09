import {
  Lecturer,
  Department,
  Modules,
  Timetable,
  Venue,
} from "../models/index.js";
// import { getToken } from "../utils/utils.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config("../../../.env");
import { GraphQLError } from "graphql";

const saltRounds = 10;

// const generateToken = user => {
//   const payload = {
//     user: {
//       id: user.id
//     }
//   };
//   return jwt.sign(payload, process.env.SECRET, { expiresIn: "24h" });
// };

const lecturerResolver = {
  Query: {
    me: async (parent, args, context, info) => {
      console.log(context.user);
      console.log("context only", context.user.user.id);
      try {
        const id = context.user.user.id;
        console.log(id);
        if (!id) {
          throw new Error("User not authenticated");
        }
        const lecturer = await Lecturer.findOne({
          where: { id },
        });
        return lecturer;
      } catch (error) {
        console.log("Error fetching lecturer: ", error);
        throw new Error(error);
      }
    },
    getAllLecturers: async () => {
      try {
        const lecturers = await Lecturer.findAll({
          include: [Department, Modules],
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
          where: { id },
        });
        return lecturer;
      } catch (error) {
        console.error("Error fetching lecturer data: ", error);
        throw new Error("Error fetching lecturer data");
      }
    },
    getLecturerTimetable: async (parent, args, context, info) => {
      console.log(context.user);
      console.log("context only", context.user.user.id);
      try {
        const id = context.user.user.id;
        console.log(id);
        if (id) {
          const modules = await Modules.findAll({
            where: { lecturer_module: id },
            include: [{ model: Timetable, include: [{ model: Venue }] }],
          });
                
            console.log("moduleID", modules[0].id);
          if(modules.length > 0){
            const lecturerModuleId = modules[0].id;
            console.log("Module Id",lecturerModuleId)
            const timetable = await Timetable.findAll({where:{timetable_module:lecturerModuleId},include:[Modules,Venue]});
            return timetable;
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    addLecturer: async (
      parent,
      {
        lecturer_full_name,
        lecturer_staff_number,
        password,
        lecturer_department,
      }
    ) => {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      try {
        const lecturer = await Lecturer.create({
          lecturer_full_name,
          lecturer_staff_number,
          password: hashedPassword,
          lecturer_department,
        });
        return lecturer;
      } catch (error) {
        console.error("Error there some field are null: ", error);
        throw new Error(error);
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

        lecturer.update({
          lecturer_full_name,
          lecturer_staff_number,
          password: hashedPassword,
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
    },
    login: async (_, args, context, info) => {
      try {
        const lecturer = await Lecturer.findOne({
          where: { lecturer_staff_number: args.lecturer_staff_number },
        });
        if (!lecturer) {
          throw new Error("There are is no lecturer with that staff number");
        }
        const isMatch = await bcrypt.compare(args.password, lecturer.password);
        if (!isMatch) {
          throw new Error("Invalid credential");
        }
        const token = jwt.sign(
          {
            user: { id: lecturer.id, username: lecturer.lecturer_staff_number },
          },
          "MyPrivate",
          { expiresIn: "1h" }
        );
        // const token = generateToken(lecturer);
        // const token = getToken(lecturer);
        // console.log(
        //   "Lecturers",
        //   lecturer.lecturer_staff_number,
        //   "and the token is",
        //   token
        // );
        console.log(token);
        return token;
      } catch (error) {
        throw new GraphQLError(error);
      }
    },
  },
};

export default lecturerResolver;
