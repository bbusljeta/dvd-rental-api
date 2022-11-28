'use strict';
const tableNames = require("../tableNames");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable(tableNames.inventory, {
      inventory_id: {
        field: "inventory_id",
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      film_id: {
        field: "film_id",
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          key: "film_id",
          model: {
            tableName: "film"
          }
        }
      },
      store_id: {
        field: "store_id",
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          key: "store_id",
          model: {
            tableName: "store"
          }
        }
      },
      last_update: {
        field: 'last_update',
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      },
    });

    await queryInterface.addIndex(tableNames.inventory, ["store_id", "film_id"]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableNames.inventory)
  }
};
