export default (sequelize, DataTypes) => {
  const AttendanceModel = sequelize.define(
    "attendance",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      attendance_code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      attendance_status: {
        type: DataTypes.ENUM("BAD", "SATISFY", "GOOD", "EXCELLENT"),
        defaultValue: "SATISFY",
        allowNull: false
      }
    },
    { timestamps: false, freezeTableName: true }
  );

  return AttendanceModel;
};
