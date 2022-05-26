'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     */
     await queryInterface.bulkInsert('quotes', [
       {
          name: '曾生',
          address: "九龍紅磡崇潔街10號崇仁樓3字F室",
          content: [],
          memo: ["工程可能因天氣關係會延遲1-2星期"],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
         name: '羅小姐',
         address: "九龍何文田利工街9號悅目27樓J",
         content: [contentData],
         memo: null,
         createdAt: new Date(),
         updatedAt: new Date()
       }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     */
     await queryInterface.bulkDelete('quotes', null, {});

  }
};
