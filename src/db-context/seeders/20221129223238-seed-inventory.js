'use strict';
const fs = require('fs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const sql = fs.readFileSync(require.resolve("../../../data/inventory.sql"), 'utf8');
    await queryInterface.sequelize.query(sql);
    await queryInterface.sequelize.query(`select setval('inventory_inventory_id_seq', (select max(inventory_id) from inventory), true)`);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
