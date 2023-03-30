import { v4 as uuidv4 } from 'uuid';
export default (sequelize, DataTypes) => {
  const VenueModel = sequelize.define(
    "venue",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue:uuidv4,
        unique:true,
    
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

  return VenueModel;
};
