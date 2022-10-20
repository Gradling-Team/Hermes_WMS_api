const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LOT', {
    ID_lot: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    'Péremption': {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'LOT',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_lot" },
        ]
      },
    ]
  });
};
