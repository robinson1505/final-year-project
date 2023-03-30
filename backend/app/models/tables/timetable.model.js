export default (sequelize, DataTypes) => {
  const TimetableModel = sequelize.define(
    "timetable",
    {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      timetable_code: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      module_day: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      time_in: {
        type: DataTypes.TIME,
        allowNull: false
      },
      time_out: {
        type: DataTypes.TIME,
        allowNull: false
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );
  return TimetableModel;
};
