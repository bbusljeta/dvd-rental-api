'use strict';

const tableNames = require("../tableNames");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableNames.payment, {
      payment_id: {
        field: "payment_id",
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      customer_id: {
        field: "customer_id",
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          key: 'customer_id',
          model: {
            tableName: 'customer',
          },
        },
      },
      staff_id: {
        field: "staff_id",
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          key: 'staff_id',
          model: {
            tableName: 'staff',
          },
        },
      },
      rental_id: {
        field: "rental_id",
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          key: 'rental_id',
          model: {
            tableName: 'rental',
          },
        },
      },
      amount: {
        field: "amount",
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false
      },
      payment_date: {
        field: "payment_date",
        type: Sequelize.DATE,
        allowNull: false
      }
    });

    await queryInterface.addIndex(tableNames.payment, ["customer_id", "rental_id", "staff_id"]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableNames.payment);
  }
};
