"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("quotes", "payment_method", {
      type: Sequelize.ARRAY(Sequelize.JSON),
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("quotes", "payment_method");
  },
};
