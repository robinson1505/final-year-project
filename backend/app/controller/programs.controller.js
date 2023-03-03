const { Programs, Department } = require("../models");

module.exports = {
  async createProgram(req, res) {
    try {
      const {
        program_code,
        program_name,
        nta_level,
        program_department
      } = req.body;
      const program = await Programs.create({
        program_code,
        program_name,
        nta_level,
        program_department
      });
      res.status(201).json({ program });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  async getPrograms(req, res) {
    try {
      const programs = await Programs.findAll({
        include: [{ model: Department }]
      });
      res.status(200).json({ programs });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error });
    }
  }
};

// exports.findAllPrograms = (req,res) => {
//     Programs.getAllPrograms((error,data) =>{
//         if(error){
//             res.status(500).send({
//                 message:error.message || "Some error occurred while retrieving programs"
//             })
//         }else res.send(data);

//     })
// }

// exports.findProgram = (req,res) =>{
//     let id = req.params.programId
//     Programs.getProgram(id,(error,data) =>{
//         if(error){
//             if(error.kind === "not_found"){
//                 res.status(404).send({
//                     message:`Not found program with id ${id}`
//                 })
//             }
//             else{
//                 res.status(500).send({
//                     message:"Error while retrieving program with id" + id
//                 })
//             }
//         }
//         else res.send(data)
//     })
// }
