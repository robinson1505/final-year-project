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
