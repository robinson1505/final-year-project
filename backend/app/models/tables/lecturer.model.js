export default (sequelize, DataTypes) => {
  const LecturerModel = sequelize.define(
    "lecturer",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      lecturer_full_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lecturer_staff_number: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: 4 }
      }
    },
    { timestamps: false, freezeTableName: true }
  );
  return LecturerModel;
};
