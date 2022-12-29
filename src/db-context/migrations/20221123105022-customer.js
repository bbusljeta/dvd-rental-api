'use strict';
const tableNames = require("../tableNames");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable(tableNames.customer, {
      customer_id: {
        field: "customer_id",
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      first_name: {
        field: "first_name",
        type: Sequelize.STRING(45),
        allowNull: false
      },
      last_name: {
        field: "last_name",
        type: Sequelize.STRING(45),
        allowNull: false
      },
      email: {
        field: "email",
        type: Sequelize.STRING(45),
        allowNull: false
      },
      address_id: {
        field: "address_id",
        type: Sequelize.INTEGER,
        references: {
          key: 'address_id',
          model: {
            tableName: 'address',
          },
        },
      },
      store_id: {
        field: 'store_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          key: 'store_id',
          model: {
            tableName: 'store',
          },
        },
      },
      activebool: {
        field: "activebool",
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      active: {
        field: "active",
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: false,
      },
      create_date: {
        field: 'create_date',
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      last_update: {
        field: 'last_update',
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    })

    await queryInterface.addIndex(tableNames.customer, ["address_id", "store_id", "last_name"]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableNames.customer);
  }
};
