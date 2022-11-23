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

    await queryInterface.createTable(tableNames.city, {
      city_id: {
        field: "city_id",
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      city: {
        field: "city",
        type: Sequelize.CHAR(50),
        allowNull: false
      },
      country_id: {
        field: "country_id",
        type: Sequelize.INTEGER,
        references: {
          key: 'country_id',
          model: {
            tableName: 'country',
          },
        },
      },
      last_update: {
        field: 'last_update',
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable(tableNames.city);
  }
};
