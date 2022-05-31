'use strict';

function cleanEntry(obj) {
  return JSON.stringify(obj).replace(/"/g, '\\"')
}

function cleanArray(arr) {
  return '{"' + arr.map(e => cleanEntry(e)).join('", "') + '"}'
}


module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     */
    await queryInterface.bulkInsert('quotes', [
      {
        name: '馮小姐',
        address: "九龍何文田半山一號10樓J",
        contents: cleanArray([
          {
            "id": "uberw-32",
            "item": "清拆全屋傢俬",
            "price": "28000",
          },
          {
            "id": "kiowe123",
            "item": "更換全屋電器",
            "price": "28000",
          }
        ]),
        memo: ["工程可能因為天氣而延遲10天"],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "李生",
        address: "西半山好景花園一期D座8樓A",
        contents: cleanArray([
          {
            "id": "dokidoki-123",
            "item": "清拆全屋傢俬",
            "price": "28000",
          },
          {
            "id": "bmthksi-232",
            "item": "更換全屋電器",
            "price": "28000",
          }
        ]),
        memo: ["工程可能因為天氣而延遲10天$開工後先付30%$完工後付70%"],
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {
    contents: { type: new Sequelize.JSON() }
  });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     */
     await queryInterface.bulkDelete('quotes', null, {});
  }
};
