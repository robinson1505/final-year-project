export default (sequelize, DataTypes) => {
  const ModulesModel = sequelize.define(
    "modules",
    {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      module_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      module_code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      number_of_students: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { timestamps: false, freezeTableName: true }
  );
  return ModulesModel;
};
