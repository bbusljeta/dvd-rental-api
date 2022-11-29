'use strict';
const tableNames = require("../tableNames");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableNames.filmCategory, {
      film_id: {
        field: "film_id",
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          key: 'film_id',
          model: {
            tableName: 'film',
          },
        },
      },
      category_id: {
        field: "category_id",
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          key: 'category_id',
          model: {
            tableName: 'category',
          },
        },
      },
      last_update: {
        field: 'last_update',
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      },
    }, {
      uniqueKeys: {
        film_category: {
          fields: ["category_id", "film_id"],
        }
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableNames.filmCategory);
  }
};
