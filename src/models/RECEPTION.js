const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RECEPTION', {
    ID_recept: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    'Entrepôt_Dest': {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    'Entrepôt_Source': {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Datetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    STATUSCODE: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'RECEPTION',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_recept" },
        ]
      },
    ]
  });
};
