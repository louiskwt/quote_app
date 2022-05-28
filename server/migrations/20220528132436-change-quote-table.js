'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('quotes', 'content', 'contents');
  },

  async down (queryInterface, Sequelize) {
    // revert the changes
    await queryInterface.renameColumn('quotes', 'contents', 'content');
  }
};
