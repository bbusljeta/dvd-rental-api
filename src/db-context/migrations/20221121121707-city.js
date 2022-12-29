'use strict';
const tableNames = require("../tableNames");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

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
        type: Sequelize.STRING(50),
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

    await queryInterface.addIndex(tableNames.city, ["country_id"]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableNames.city);
  }
};
