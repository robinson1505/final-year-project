const { Timetable, Modules, Venue, Lecturer, Student } = require("../models");

module.exports = {
  async createTimetable(req, res) {
    try {
      const {
        timetable_code,
        module_day,
        timetable_module,
        timetable_venue,
        timetable_lecturer,
        time_in,
        time_out
      } = req.body;
      const timetable = await Timetable.create({
        timetable_code,
        module_day,
        timetable_module,
        timetable_venue,
        timetable_lecturer,
        time_in,
        time_out
      });
      res.status(201).json({ timetable });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  async getTimetable(req, res) {
    try {
      const timetable = await Timetable.findAll({
        include: [{ model: Lecturer }, { model: Venue }, { model: Modules }]
      });
      res.status(200).json({ timetable });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error });
    }
  }
};

// const Timetable = require("../models/timetable.models");

// exports.findAllTimetable = (req,res) => {
//     Timetable.getAllTimetable((error,data) =>{
//         if(error){
//             res.status(500).send({
//                 message:error.message || "Some error occurred while retrieving timetable"
//             })
//         }else res.send(data);

//     })
// }

// exports.findTimetable = (req,res) =>{
//     let id = req.params.timetableId
//     Timetable.getTimetable(id,(error,data) =>{
//         if(error){
//             if(error.kind === "not_found"){
//                 res.status(404).send({
//                     message:`Not found timetable with id ${id}`
//                 })
//             }
//             else{
//                 res.status(500).send({
//                     message:"Error while retrieving timetable with id" + id
//                 })
//             }
//         }
//         else res.send(data)
//     })
// }
