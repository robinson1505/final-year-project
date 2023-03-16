module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define(
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
        default: "SATISFY",
        allowNull: false
      }
    },
    { timestamps: false, freezeTableName: true }
  );

  return Attendance;
};
