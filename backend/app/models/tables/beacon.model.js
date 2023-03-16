module.exports = (sequelize, DataTypes) => {
  const Beacon = sequelize.define("beacon", {
    id: {
      allowNull:false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    beacon_mac_address: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {timestamps: false,freezeTableName: true});
  return Beacon;
};
