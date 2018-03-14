// // Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");

// var burger = {
//     selectAll: function (cb) {
//         orm.selectAll("burgers", function (res) {
//             cb(res);
//         });
//     },
//     // The variables cols and vals are arrays.
//     insertOne: function (cols, vals, cb) {
//         orm.insertOne("burgers", cols, vals, function (res) {
//             cb(res);
//         });
//     },
//     updateOne: function (objColVals, condition, cb) {
//         orm.updateOne("burgers", objColVals, condition, function (res) {
//             cb(res);
//         });
//     }
// };

// // Export the database functions for the controller (burgers_controller.js).
// module.exports = burger;


module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
        // Here we'll pass a second "classMethods" object into the define method
        // This is for any additional configuration we want to give our models
        {
            // We're saying that we want our burger to have one customer.
            classMethods: {
                associate: function (models) {
                    // Associating Burger with Customer.
                    // When a Burger is deleted, set the customer to null.
                    Burger.hasOne(models.Customer, {
                        onDelete: "set null"
                    });
                }
            }
        });
    return Burger;
};