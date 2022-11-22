'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('film_category', {
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
      category_id: {
        field: "category_id",
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          key: 'category_id',
          model: {
            tableName: 'category',
          },
        },
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

    await queryInterface.dropTable('film_category')
  }
};
