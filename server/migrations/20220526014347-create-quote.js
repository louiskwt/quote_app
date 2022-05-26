'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('quotes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      content: {
        type: Sequelize.ARRAY(Sequelize.JSON),
        allowNull: false
      },
      memo: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('quotes');
  }
};