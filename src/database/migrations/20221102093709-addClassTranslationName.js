'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('classes', 'nameTranslated', {
          type: Sequelize.DataTypes.STRING,
        }, {transaction: t})
      ])
    })
  },

  async down (queryInterface) {
    return queryInterface.sequelize.transaction(t => {
      return queryInterface.removeColumn('classes', 'nameTranslated', {transaction: t})
    })
  }
};
