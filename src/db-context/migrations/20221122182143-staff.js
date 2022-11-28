'use strict';
const tableNames = require("../tableNames");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable(tableNames.staff, {
      staff_id: {
        field: "staff_id",
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      last_update: {
        field: 'last_update',
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
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
      address_id: {
        field: "address_id",
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          key: 'address_id',
          model: {
            tableName: 'address',
          },
        },
      },
      store_id: {
        field: "store_id",
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      active: {
        field: "active",
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      username: {
        field: "username",
        type: Sequelize.CHAR(16),
        allowNull: false
      },
      password: {
        field: "password",
        type: Sequelize.CHAR(40),
        allowNull: false
      },
      email: {
        field: "email",
        type: Sequelize.CHAR(50),
      },
      picture: {
        field: 'picture',
        type: Sequelize.BLOB,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableNames.staff)
  }
};
