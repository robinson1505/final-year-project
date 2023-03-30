import { Attendance } from "../models/index.js";

const attendanceResolver = {
  Query: {
    getAllAttendance: async () => {
      try {
        const attendance = await Attendance.findAll();
        return attendance;
      } catch (error) {
        console.error("Error fetching  attendance data: ", error);
        throw new Error("Error fetching attendance data");
      }
    },
    getAttendance: async (parent,{id}) => {
      try {
       const attendance =await Attendance.findOne({where:{id}});
       return attendance
      } catch (error) {
        console.error("Error fetching attendance data: ", error);
        throw new Error("Error fetching attendance data");
      }
    }
  }
};

export default attendanceResolver;
