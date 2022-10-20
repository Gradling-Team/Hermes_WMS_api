const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Groupe', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nom: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "Nom"
    },
    Permission: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: "Permission"
    },
    ID_1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Utilisateur',
        key: 'ID'
      }
    }
  }, {
    sequelize,
    tableName: 'Groupe',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "Nom",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Nom" },
        ]
      },
      {
        name: "Permission",
        unique: true,
        using: "HASH",
        fields: [
          { name: "Permission" },
        ]
      },
      {
        name: "ID_1",
        using: "BTREE",
        fields: [
          { name: "ID_1" },
        ]
      },
    ]
  });
};
