'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sources', [
      {
        id: 'phb',
        name: "Players Handbook",
        shortName: "PHB",
        isOfficial: true,
      },
      {
        id: 'xgte',
        name: "Xanathar's Guide to Everything",
        shortName: "XGtE",
        isOfficial: true,
      },
      {
        id: 'scag',
        name: "Sword Coast Adventurer's Guide",
        shortName: "SCAG",
        isOfficial: true,
      },
      {
        id: 'tcoe',
        name: "Tasha's Cauldron of Everything",
        shortName: "TCoE",
        isOfficial: true,
      },
      {
        id: 'dmg',
        name: "Dungeon Master's Guide",
        shortName: "DMG",
        isOfficial: true,
      },
      {
        id: 'ftod',
        name: "Fizban's Treasury of Dragons",
        shortName: "FToD",
        isOfficial: true,
      },
      {
        id: 'vrgr',
        name: "Van Richten's Guide to Ravenloft",
        shortName: "VRGR",
        isOfficial: true,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('sources', null, {});
  }
};
