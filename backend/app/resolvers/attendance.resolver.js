import { Attendance, Student, Modules, Timetable } from "../models/index.js";

const attendanceResolver = {
  Query: {
    getAllAttendance: async () => {
      try {
        const attendance = await Attendance.findAll({
          include: [Student, Modules, Timetable]
        });
        return attendance;
      } catch (error) {
        console.error("Error fetching  attendance data: ", error);
        throw new Error("Error fetching attendance data");
      }
    },
    getAttendance: async (parent, { id }) => {
      try {
        const attendance = await Attendance.findOne({
          include: [Student, Modules, Timetable],
          where: { id }
        });
        return attendance;
      } catch (error) {
        console.error("Error fetching attendance data: ", error);
        throw new Error("Error fetching attendance data");
      }
    }
  },
  Mutation: {
    addAttendance: async (
      parent,
      {
        attendance_code,
        attendance_status,
        student_attendance,
        attendance_module,
        attendance_timetable
      }
    ) => {
      try {
        const attendance = await Attendance.create({
          attendance_code,
          attendance_status,
          student_attendance,
          attendance_module,
          attendance_timetable
        });
        return attendance.toJSON();
      } catch (error) {
        console.error("Error there some field are null: ", error);
        throw new Error("Error on Adding Attendance");
      }
    },
    updateAttendance: async (
      parent,
      { id, attendance_code, attendance_status }
    ) => {
      try {
        const attendance = await Attendance.findOne({ where: { id } });
        attendance.update({
          attendance_code,
          attendance_status
        });
        return attendance;
      } catch (error) {
        console.error("Error there can not find the attendance: ", error);
        throw new Error(error);
      }
    },
    deleteAttendance: async (parent, { id }) => {
      try {
        const attendance = await Attendance.findOne({ where: { id } });
        attendance.destroy();
        return true;
      } catch (error) {
        console.error("Error there can not find the Attendance: ", error);
        throw new Error("Error on deleting Attendance");
      }
    }
  }
};

export default attendanceResolver;
