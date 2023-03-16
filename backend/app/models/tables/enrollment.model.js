// CREATE TABLE enrollment (
//     enrollment_id CHAR(36) DEFAULT uuid() UNIQUE NOT NULL,
//     student_id VARCHAR(100) NOT NULL,
//     module_code VARCHAR(20) NOT NULL,
//     semester INT(1) NOT NULL,
//     academic_year VARCHAR(15) NOT NULL,
//     number_of_student VARCHAR(15) NOT NULL PRIMARY KEY(id),
//     FOREIGN KEY(student_id) REFERENCES student(id) ON UPDATE CASCADE ON DELETE CASCADE,
//     FOREIGN KEY(module_code) REFERENCES courses(module_code) ON UPDATE CASCADE ON DELETE CASCADE
// );

module.exports = (sequelize, DataTypes) => {
  const Enrollment = sequelize.define(
    "enrollment",
    {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      semester: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      academic_year: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { timestamps: false, freezeTableName: true }
  );
  return Enrollment;
};
