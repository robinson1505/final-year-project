module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    "student",
    {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      student_full_name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      student_registration_number: {
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
  return Student;
};
