'use strict';
const tableNames = require("../tableNames");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableNames.actor, {
      actor_id: {
        field: "actor_id",
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
      last_update: {
        field: 'last_update',
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },

    })

    await queryInterface.addIndex(tableNames.actor, ["last_name"]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableNames.actor)
  }
};
