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
    const sql = fs.readFileSync(require.resolve("../../../data/rental.sql"), 'utf8');
    await queryInterface.sequelize.query(sql);
    await queryInterface.sequelize.query(`select setval('rental_rental_id_seq', (select max(rental_id) from rental), true)`);
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
