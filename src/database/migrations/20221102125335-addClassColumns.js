'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('classes', 'subclassesTitleOriginal', {
          type: Sequelize.DataTypes.STRING,
        }, {transaction: t}),
        queryInterface.addColumn('classes', 'subclassesTitleTranslated', {
          type: Sequelize.DataTypes.STRING,
          allowNull: true,
        }, {transaction: t}),
      ])
    })
  },

  async down (queryInterface) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('classes', 'subclassesTitleOriginal', {transaction: t}),
        queryInterface.removeColumn('classes', 'subclassesTitleTranslated', {transaction: t}),
      ]);
    })
  }
};
