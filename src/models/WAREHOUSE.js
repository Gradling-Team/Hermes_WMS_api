const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WAREHOUSE', {
    ID_WAREHOUSE: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ADRESS1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ADRESS2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PC: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'WAREHOUSE',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_WAREHOUSE" },
        ]
      },
    ]
  });
};
