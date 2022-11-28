'use strict';
const tableNames = require("../tableNames");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable(tableNames.filmActor, {
      film_id: {
        field: "film_id",
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          key: 'film_id',
          model: {
            tableName: 'film',
          },
        },
      },
      actor_id: {
        field: "actor_id",
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          key: 'actor_id',
          model: {
            tableName: 'actor',
          },
        },
      },
      last_update: {
        field: 'last_update',
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      },
    })

    await queryInterface.addIndex(tableNames.filmActor, ["film_id"]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableNames.filmActor)
  }
};
