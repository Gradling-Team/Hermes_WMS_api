const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RECEIVE', {
    ID_recept: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'RECEPTION',
        key: 'ID_recept'
      }
    },
    ID_Ep: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ENTITY',
        key: 'ID_Ep'
      }
    }
  }, {
    sequelize,
    tableName: 'RECEIVE',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_recept" },
          { name: "ID_Ep" },
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
