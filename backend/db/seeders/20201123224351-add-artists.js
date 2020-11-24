'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Artists', [
      {id: 1, artistName: "Polaris", genre: "Metalcore", members: ["Jamie Hails", "Daniel Furnari", "Ryan Siew", "Rick Schneider", "Jake Steinhauser"],  }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Artists', null, {});

  }
};
