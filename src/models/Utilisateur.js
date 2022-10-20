const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Utilisateur', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Identifiant: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "Identifiant"
    },
    Password: {
      type: DataTypes.STRING(400),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Utilisateur',
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
        name: "Identifiant",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Identifiant" },
        ]
      },
    ]
  });
};
