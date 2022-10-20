var DataTypes = require("sequelize").DataTypes;
var _ENTITY = require("./ENTITY");
var _Groupe = require("./Groupe");
var _LOT = require("./LOT");
var _ORDER_TICKET = require("./ORDER_TICKET");
var _PARTOF = require("./PARTOF");
var _PRODUCT_FORM = require("./PRODUCT_FORM");
var _RECEIVE = require("./RECEIVE");
var _RECEPTION = require("./RECEPTION");
var _STORAGE_AREA = require("./STORAGE_AREA");
var _Utilisateur = require("./Utilisateur");
var _WAREHOUSE = require("./WAREHOUSE");
var _WARNING = require("./WARNING");

function initModels(sequelize) {
  var ENTITY = _ENTITY(sequelize, DataTypes);
  var Groupe = _Groupe(sequelize, DataTypes);
  var LOT = _LOT(sequelize, DataTypes);
  var ORDER_TICKET = _ORDER_TICKET(sequelize, DataTypes);
  var PARTOF = _PARTOF(sequelize, DataTypes);
  var PRODUCT_FORM = _PRODUCT_FORM(sequelize, DataTypes);
  var RECEIVE = _RECEIVE(sequelize, DataTypes);
  var RECEPTION = _RECEPTION(sequelize, DataTypes);
  var STORAGE_AREA = _STORAGE_AREA(sequelize, DataTypes);
  var Utilisateur = _Utilisateur(sequelize, DataTypes);
  var WAREHOUSE = _WAREHOUSE(sequelize, DataTypes);
  var WARNING = _WARNING(sequelize, DataTypes);

  ENTITY.belongsToMany(RECEPTION, {
    as: "ID_recept_RECEPTIONs",
    through: RECEIVE,
    foreignKey: "ID_Ep",
    otherKey: "ID_recept",
  });
  Groupe.belongsToMany(WAREHOUSE, {
    as: "ID_WAREHOUSE_WAREHOUSEs",
    through: PARTOF,
    foreignKey: "ID",
    otherKey: "ID_WAREHOUSE",
  });
  RECEPTION.belongsToMany(ENTITY, {
    as: "ID_Ep_ENTITies",
    through: RECEIVE,
    foreignKey: "ID_recept",
    otherKey: "ID_Ep",
  });
  WAREHOUSE.belongsToMany(Groupe, {
    as: "ID_Groupes",
    through: PARTOF,
    foreignKey: "ID_WAREHOUSE",
    otherKey: "ID",
  });
  RECEIVE.belongsTo(ENTITY, { as: "ID_Ep_ENTITY", foreignKey: "ID_Ep" });
  ENTITY.hasMany(RECEIVE, { as: "RECEIVEs", foreignKey: "ID_Ep" });
  WARNING.belongsTo(ENTITY, { as: "ID_Ep_ENTITY", foreignKey: "ID_Ep" });
  ENTITY.hasMany(WARNING, { as: "WARNINGs", foreignKey: "ID_Ep" });
  PARTOF.belongsTo(Groupe, { as: "ID_Groupe", foreignKey: "ID" });
  Groupe.hasMany(PARTOF, { as: "PARTOFs", foreignKey: "ID" });
  ENTITY.belongsTo(LOT, { as: "ID_lot_LOT", foreignKey: "ID_lot" });
  LOT.hasMany(ENTITY, { as: "ENTITies", foreignKey: "ID_lot" });
  ENTITY.belongsTo(ORDER_TICKET, {
    as: "ID_ORDER_ORDER_TICKET",
    foreignKey: "ID_ORDER",
  });
  ORDER_TICKET.hasMany(ENTITY, { as: "ENTITies", foreignKey: "ID_ORDER" });
  ENTITY.belongsTo(PRODUCT_FORM, {
    as: "ID_prod_PRODUCT_FORM",
    foreignKey: "ID_prod",
  });
  PRODUCT_FORM.hasMany(ENTITY, { as: "ENTITies", foreignKey: "ID_prod" });
  RECEIVE.belongsTo(RECEPTION, {
    as: "ID_recept_RECEPTION",
    foreignKey: "ID_recept",
  });
  RECEPTION.hasMany(RECEIVE, { as: "RECEIVEs", foreignKey: "ID_recept" });
  ENTITY.belongsTo(STORAGE_AREA, {
    as: "ID_AREA_STORAGE_AREA",
    foreignKey: "ID_AREA",
  });
  STORAGE_AREA.hasMany(ENTITY, { as: "ENTITies", foreignKey: "ID_AREA" });
  Groupe.belongsTo(Utilisateur, { as: "ID_1_Utilisateur", foreignKey: "ID_1" });
  Utilisateur.hasMany(Groupe, { as: "Groupes", foreignKey: "ID_1" });
  PARTOF.belongsTo(WAREHOUSE, {
    as: "ID_WAREHOUSE_WAREHOUSE",
    foreignKey: "ID_WAREHOUSE",
  });
  WAREHOUSE.hasMany(PARTOF, { as: "PARTOFs", foreignKey: "ID_WAREHOUSE" });
  STORAGE_AREA.belongsTo(WAREHOUSE, {
    as: "ID_WAREHOUSE_WAREHOUSE",
    foreignKey: "ID_WAREHOUSE",
  });
  WAREHOUSE.hasMany(STORAGE_AREA, {
    as: "STORAGE_AREAs",
    foreignKey: "ID_WAREHOUSE",
  });

  return {
    ENTITY,
    Groupe,
    LOT,
    ORDER_TICKET,
    PARTOF,
    PRODUCT_FORM,
    RECEIVE,
    RECEPTION,
    STORAGE_AREA,
    Utilisateur,
    WAREHOUSE,
    WARNING,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
