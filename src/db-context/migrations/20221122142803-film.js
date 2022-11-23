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
    await queryInterface.createTable(tableNames.film, {
      film_id: {
        field: "film_id",
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        field: "title",
        type: Sequelize.CHAR(255),
        allowNull: false
      },
      description: {
        field: "description",
        type: Sequelize.TEXT,
      },
      release_year: {
        field: "release_year",
        type: Sequelize.SMALLINT({ unsigned: true }),
        validate: {
          max: 2155,
          min: 1901,
        }
      },
      language_id: {
        field: 'language_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          key: 'language_id',
          model: {
            tableName: 'language',
          },
        },
      },
      rental_duration: {
        field: "rental_duration",
        type: Sequelize.TINYINT({ unsigned: true }),
        allowNull: false
      },
      rental_rate: {
        field: "rental_rate",
        type: Sequelize.DECIMAL(4, 2),
        allowNull: false
      },
      length: {
        field: "length",
        type: Sequelize.TINYINT({ unsigned: true }),
      },
      replacement_cost: {
        field: "replacement_cost",
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false
      },
      rating: {
        field: "rating",
        type: Sequelize.ENUM('G', 'PG', 'PG-13', 'R', 'NC-17')
      },
      last_update: {
        field: 'last_update',
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      special_features: {
        field: "special_features",
        type: Sequelize.TEXT
      },
      fulltext: {
        field: "fulltext",
        type: Sequelize.TSVECTOR
      }
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable(tableNames.film);
  }
};


