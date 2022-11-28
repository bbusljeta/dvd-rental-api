'use strict';
const tableNames = require("../tableNames");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableNames.store, {
      store_id: {
        field: "store_id",
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      manager_staff_id: {
        field: "manager_staff_id",
        type: Sequelize.INTEGER,
        references: {
          key: 'staff_id',
          model: {
            tableName: 'staff',
          },
        },
      },
      address_id: {
        field: "address_id",
        type: Sequelize.INTEGER,
        references: {
          key: "address_id",
          model: {
            tableName: "address"
          }
        }
      },
      last_update: {
        field: 'last_update',
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    })

    await queryInterface.addIndex(tableNames.store, ["manager_staff_id"]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableNames.store);
  }
};
