const Department = require("../models/department.model");

exports.findAllDepartment = (req, res) => {
  Department.getAllDepartments((error, data) => {
    if (error) {
      res.status(500).send({
        message:
          error.message || "Some error occurred while retrieving Departments",
      });
    } else {
      res.send(data);
    }
  });
};
exports.findDepartment = (req, res) => {
  let id = req.params.departmentId;
  Department.getDepartment(id, (error, data) => {
    if (error) {
      if (error.kind === "not_found") {
        res.status(404).send({
          message: `Not Found Department with id ${id}`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Department with id" + id,
        });
      }
    } else {
      res.send(data);
    }
  });
};
