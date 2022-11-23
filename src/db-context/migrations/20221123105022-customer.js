'use strict';

const { tableNames } = require("../tableNames")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

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
        type: Sequelize.CHAR(45),
        allowNull: false
      },
      last_name: {
        field: "last_name",
        type: Sequelize.CHAR(45),
        allowNull: false
      },
      email: {
        field: "email",
        type: Sequelize.CHAR(45),
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
      activebool: {
        field: "activebool",
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      // not sure about this
      active: {
        field: "active",
        type: Sequelize.NUMBER({ length: 4 }),
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
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable(tableNames.customer);
  }
};
