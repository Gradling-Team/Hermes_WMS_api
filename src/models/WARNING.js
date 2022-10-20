const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WARNING', {
    ID_WARN: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    REASONCODE: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ID_Ep: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ENTITY',
        key: 'ID_Ep'
      }
    }
  }, {
    sequelize,
    tableName: 'WARNING',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_WARN" },
        ]
      },
      {
        name: "ID_Ep",
        using: "BTREE",
        fields: [
          { name: "ID_Ep" },
        ]
      },
    ]
  });
};
