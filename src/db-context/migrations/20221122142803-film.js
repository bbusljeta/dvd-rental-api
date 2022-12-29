'use strict';
const tableNames = require("../tableNames");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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
        type: Sequelize.STRING(255),
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
        },
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
        type: Sequelize.SMALLINT({ unsigned: true }),
        allowNull: false,
        defaultValue: 3
      },
      rental_rate: {
        field: "rental_rate",
        type: Sequelize.DECIMAL(4, 2),
        allowNull: false,
        defaultValue: 4.99
      },
      length: {
        field: "length",
        type: Sequelize.SMALLINT({ unsigned: true }),
      },
      replacement_cost: {
        field: "replacement_cost",
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false,
        defaultValue: 19.99
      },
      rating: {
        field: "rating",
        type: Sequelize.ENUM('G', 'PG', 'PG-13', 'R', 'NC-17'),
        defaultValue: "G"
      },
      last_update: {
        field: 'last_update',
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      },
      special_features: {
        field: "special_features",
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      fulltext: {
        field: "fulltext",
        type: Sequelize.TSVECTOR,
        allowNull: false
      }
    })

    await queryInterface.addIndex(tableNames.film, ["fulltext", "language_id", "title"]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableNames.film);
  }
};


