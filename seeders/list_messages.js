'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return(queryInterface.bulkInsert('message', [
      {
        title: 'Hey!',
        body:  'Just say something',

      }, {
        title: 'Word to ya Mother',
        body:  'Almost yo Mama Day!',

      },
    ]));
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('message');
  }
};
