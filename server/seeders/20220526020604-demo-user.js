'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     */
     await queryInterface.bulkInsert('users', [{
        name: 'John Doe',
        email: 'john@gmail.com',
        password: 'john123123',
        createdAt: new Date(),
        updatedAt: new Date()
     }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     */
     await queryInterface.bulkDelete('users', null, {});
     
  }
};
