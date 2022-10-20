const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('STORAGE_AREA', {
    ID_AREA: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AREA_CODE: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CAPACITY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ID_WAREHOUSE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'WAREHOUSE',
        key: 'ID_WAREHOUSE'
      }
    }
  }, {
    sequelize,
    tableName: 'STORAGE_AREA',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_AREA" },
        ]
      },
      {
        name: "ID_WAREHOUSE",
        using: "BTREE",
        fields: [
          { name: "ID_WAREHOUSE" },
        ]
      },
    ]
  });
};
