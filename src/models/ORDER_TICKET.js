const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ORDER_TICKET', {
    ID_ORDER: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DATETIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    STATUSCODE: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DESTINATION: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DELIVERYDATE: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ORDER_TICKET',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_ORDER" },
        ]
      },
    ]
  });
};
