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
    await queryInterface.createTable('actor', {
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
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};