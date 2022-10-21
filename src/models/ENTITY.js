const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ENTITY', {
    ID_Ep: {
      autoIncrement:true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID_ORDER: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ORDER_TICKET',
        key: 'ID_ORDER'
      }
    },
    ID_AREA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'STORAGE_AREA',
        key: 'ID_AREA'
      }
    },
    ID_lot: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'LOT',
        key: 'ID_lot'
      }
    },
    ID_prod: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PRODUCT_FORM',
        key: 'ID_prod'
      }
    }
  }, {
    sequelize,
    tableName: 'ENTITY',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_Ep" },
        ]
      },
      {
        name: "ID_ORDER",
        using: "BTREE",
        fields: [
          { name: "ID_ORDER" },
        ]
      },
      {
        name: "ID_AREA",
        using: "BTREE",
        fields: [
          { name: "ID_AREA" },
        ]
      },
      {
        name: "ID_lot",
        using: "BTREE",
        fields: [
          { name: "ID_lot" },
        ]
      },
      {
        name: "ID_prod",
        using: "BTREE",
        fields: [
          { name: "ID_prod" },
        ]
      },
    ]
  });
};
