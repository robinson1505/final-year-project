module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define(
    "venue",
    {
      id: {
      
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      venue_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      venue_code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      venue_capacity: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );

  return Venue;
};
