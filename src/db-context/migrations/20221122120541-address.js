'use strict';
const tableNames = require("../tableNames");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable(tableNames.address, {
      address_id: {
        field: "address_id",
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      address: {
        field: "address",
        type: Sequelize.STRING(50),
      },
      address2: {
        field: "address2",
        type: Sequelize.STRING(50),
      },
      district: {
        field: "district",
        type: Sequelize.STRING(20)
      },
      postal_code: {
        field: "postal_code",
        type: Sequelize.STRING(10)
      },
      phone: {
        field: "phone",
        type: Sequelize.STRING(20)
      },
      city_id: {
        field: "city_id",
        type: Sequelize.INTEGER,
        references: {
          key: 'city_id',
          model: {
            tableName: 'city',
          },
        },
      },
      last_update: {
        field: 'last_update',
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    })

    await queryInterface.addIndex(tableNames.address, ["city_id"]);

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable(tableNames.address)
  }
};
