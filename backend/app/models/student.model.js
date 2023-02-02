const db = require("../config/db.config");

// CONSTRUCTOR

const Student = function (student) {
  this.student_id = student.student_id;
  this.student_registration_number = student.student_registration_number;
  this.student_first_name = student.student_first_name;
  this.student_middle_name = student.student_middle_name;
  this.student_last_name = student.student_last_name;
  this.program_name = student.program_name;
  this.student_nta_level = student.student_nta_level;
  this.student.academic_year = student.academic_year;
};

Student.getAllStudents = (result) => {
  let query =
    "SELECT student.student_id,  student.student_registration_number,  student.student_first_name,  student.student_middle_name,  student.student_last_name,  programs.program_name,  student.student_nta_level,  student.academic_year FROM student  INNER JOIN programs ON student.student_nta_level = programs.nta_level";

  db.query(query, (error, res) => {
    if (error) {
      console.log("error: ", error);
      result(null, error);
      return;
    }
    console.log("students: ", res);
    result(null, res);
  });
};

Student.getStudent =  (studentId, result) => {
  let query = "SELECT student.student_id,  student.student_registration_number,  student.student_first_name,  student.student_middle_name,  student.student_last_name,  programs.program_name,  student.student_nta_level,  student.academic_year FROM student  INNER JOIN programs ON student.student_nta_level = programs.nta_level WHERE student_id = ?";

db.query(query, [studentId],(error,res) =>{
  if (error) {
    console.log("error: ", error);
    result(error, null);
    return;
  }
  if (res.length) {
    console.log("Found Student: ", res[0]);
    result(null, res[0]);
    return;
  }


  //? not found Student with the id
  result({ kind: "not_found" }, null);
})

};

module.exports = Student;
