var express = require("express");
const sequelize = require("./connector.js");
const Sequelize = require("sequelize");
var router = express.Router();
var models = require("../models/init-models.js")(
    sequelize,
    Sequelize.DataTypes
);
const errHandler = (err) => {
    console.error("Error: ", err);
};
module.exports = async () => {
    await models.WAREHOUSE.create({
        NAME: "Efrei",
        ADRESS1: "30-32 avenue de la République",
        ADRESS2: "Villejuif",
        PC: "94800"
    })
    await models.WAREHOUSE.create({
        NAME: "Concordia",
        ADRESS1: "1270 rue Guy",
        ADRESS2: "Montroyal",
        PC: "QC H3ZC7Q"
    })
    await models.STORAGE_AREA.create({
        AREA_CODE: "R1",
        CAPACITY: 400,
        ID_WAREHOUSE: 1,
    })
    await models.STORAGE_AREA.create({
        AREA_CODE: "R2",
        CAPACITY: 400,
        ID_WAREHOUSE: 2,
    })
    await models.STORAGE_AREA.create({
        AREA_CODE: "D1",
        CAPACITY: 200,
        ID_WAREHOUSE: 1,
    })
    await models.STORAGE_AREA.create({
        AREA_CODE: "D2",
        CAPACITY: 200,
        ID_WAREHOUSE: 2,
    })
    await models.STORAGE_AREA.create({
        AREA_CODE: "C1",
        CAPACITY: 200,
        ID_WAREHOUSE: 1,
    })
    await models.STORAGE_AREA.create({
        AREA_CODE: "C2",
        CAPACITY: 200,
        ID_WAREHOUSE: 2,
    })
    await models.STORAGE_AREA.create({
        AREA_CODE: "S1",
        CAPACITY: 800,
        ID_WAREHOUSE: 1,
    })
    await models.STORAGE_AREA.create({
        AREA_CODE: "S2",
        CAPACITY: 800,
        ID_WAREHOUSE: 2,
    })
    await models.STORAGE_AREA.create({
        AREA_CODE: "Q1",
        CAPACITY: 800,
        ID_WAREHOUSE: 1,
    })
    await models.STORAGE_AREA.create({
        AREA_CODE: "Q2",
        CAPACITY: 800,
        ID_WAREHOUSE: 2,
    })
    await models.LOT.create({
        ID_lot: 1,
        Péremption: Date.now() + 5000,
    })
    await models.LOT.create({
        ID_lot: 2,
        Péremption: Date.now() + 50000,
    })
    await models.LOT.create({
        ID_lot: 3,
        Péremption: Date.now() + 500000,
    })
    await models.LOT.create({
        ID_lot: 4,
        Péremption: Date.now() + 5000000,
    })
    await models.ORDER_TICKET.create({
        DATETIME: "2022-10-21 10:33:56",
        STATUSCODE: "Pending",
        DESTINATION: "Efrei",
        DELIVERYDATE: "2022-10-24 12:00:00",
    })
    await models.ORDER_TICKET.create({
        DATETIME: "2022-10-19 12:41:30",
        STATUSCODE: "Pending",
        DESTINATION: "Efrei",
        DELIVERYDATE: "2022-10-30 15:30:00",
    })
    await models.ORDER_TICKET.create({
        DATETIME: "2022-10-15 16:10:53",
        STATUSCODE: "Pending",
        DESTINATION: "Concordia",
        DELIVERYDATE: "2022-10-20 13:15:00",
    })
    await models.ORDER_TICKET.create({
        DATETIME: "2022-10-21 17:44:01",
        STATUSCODE: "Pending",
        DESTINATION: "Concordia",
        DELIVERYDATE: "2022-11-01 10:00:00",
    })
    await models.ORDER_TICKET.create({
        DATETIME: "2022-10-20 13:58:45",
        STATUSCODE: "Pending",
        DESTINATION: "Efrei",
        DELIVERYDATE: "2022-10-25 14:45:00",
    })
    await models.PRODUCT_FORM.create({
        Nom: "Strawberry",
        COST: 5,
        PRICE: 8,
    })
    await models.PRODUCT_FORM.create({
        Nom: "Apple",
        COST: 2,
        PRICE: 4,
    })
    await models.PRODUCT_FORM.create({
        Nom: "Chicken",
        COST: 20,
        PRICE: 30,
    })
    await models.PRODUCT_FORM.create({
        Nom: "Yogurt",
        COST: 15,
        PRICE: 25,
    })
    for (i = 0; i < 100; i++) {
        a = i%8;
        if (i < 50) {
            await models.ENTITY.create({
                AREA_ID: 1,
                ID_prod: a,
                ID_lot: a,
                ID_ORDER: i+4,
            })
        }
        else {
            await models.ENTITY.create({
                AREA_ID: 2,
                ID_prod:,
                ID_lot:,
                ID_ORDER:,

            })
        }
    }
}
