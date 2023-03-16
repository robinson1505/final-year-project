module.exports = (sequelize, DataTypes) => {
  const Program = sequelize.define(
    "program",
    {
      id: {
       
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },

      program_code: {
        type: DataTypes.STRING,
        allowNull: false
      },
      program_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nta_level: {
        type: DataTypes.STRING,
        allowedNull: false
      }
    },
    { timestamps: false, freezeTableName: true }
  );
  return Program;
};

