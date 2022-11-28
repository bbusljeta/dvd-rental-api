'use strict';
const tableNames = require("../tableNames");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable(tableNames.rental, {
      rental_id: {
        field: "rental_id",
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      rental_date: {
        field: "rental_date",
        type: Sequelize.DATE,
        allowNull: false
      },
      inventory_id: {
        field: "inventory_id",
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          key: 'inventory_id',
          model: {
            tableName: 'inventory',
          },
        },
      },
      customer_id: {
        field: "customer_id",
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          key: 'customer_id',
          model: {
            tableName: 'customer',
          },
        },
      },
      return_date: {
        field: "return_date",
        type: Sequelize.DATE,
        allowNull: false
      },
      staff_id: {
        field: "staff_id",
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          key: 'staff_id',
          model: {
            tableName: 'staff',
          },
        },
      },
      last_update: {
        field: 'last_update',
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      },
    }, {
      uniqueKeys: {
        customer_rental_inventory: {
          fields: ["rental_date", "inventory_id", "customer_id"],
        }
      }
    });

    await queryInterface.addIndex(tableNames.rental, ["inventory_id"]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableNames.rental);
  }
};
