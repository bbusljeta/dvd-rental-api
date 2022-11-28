'use strict';

const tableNames = require("../tableNames");

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableNames.category, {
      category_id: {
        field: "category_id",
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        field: "name",
        type: Sequelize.CHAR(25),
        allowNull: false
      },
      last_update: {
        field: 'last_update',
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableNames.category);
  }
}
