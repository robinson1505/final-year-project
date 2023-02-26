const { Department } = require("../models");

module.exports = {
  async createDepartment(req, res) {
    try {
      const { department_name, department_code } = req.body;
      const department = await Department.create({
        department_name,
        department_code
      });
      res.status(201).json({ department });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
  async getDepartment(req, res) {
    try {
      const department = await Department.findAll();
      res.status(200).json({ department });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error });
    }
  }
};

// exports.findAllDepartment = (req, res) => {
//   Department.getAllDepartments((error, data) => {
//     if (error) {
//       res.status(500).send({
//         message:
//           error.message || "Some error occurred while retrieving Departments",
//       });
//     } else {
//       res.send(data);
//     }
//   });
// };
// exports.findDepartment = (req, res) => {
//   let id = req.params.departmentId;
//   Department.getDepartment(id, (error, data) => {
//     if (error) {
//       if (error.kind === "not_found") {
//         res.status(404).send({
//           message: `Not Found Department with id ${id}`,
//         });
//       } else {
//         res.status(500).send({
//           message: "Error retrieving Department with id" + id,
//         });
//       }
//     } else {
//       res.send(data);
//     }
//   });
// };
