export default (sequelize, DataTypes) => {
  const DepartmentModel = sequelize.define("department", {
    id: {
      allowNull:false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    department_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    department_code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  },
 
  {timestamps: false,freezeTableName: true});
  return DepartmentModel;
};

