'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('classes', 'description', {
          type: Sequelize.DataTypes.TEXT,
        }, {transaction: t})
      ])
    })
  },

  async down (queryInterface) {
    return queryInterface.sequelize.transaction(t => {
      return queryInterface.removeColumn('classes', 'description', {transaction: t})
    })
  }
};
