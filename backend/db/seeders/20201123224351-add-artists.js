'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Artists', [
      {id: 1, artistName: "Polaris", genre: "Metalcore", bandPhoto: "/images/bands/polaris.jpg", createdAt: new Date(), updatedAt: new Date() },
      {id: 2, artistName: "To The Grave", genre: "Slamming deathcore", bandPhoto: "/images/bands/to-the-grave.jpg", createdAt: new Date(), updatedAt: new Date() },
      {id: 3, artistName: "Currents", genre: "Metalcore", bandPhoto: "/images/bands/currents.jpg", createdAt: new Date(), updatedAt: new Date() },
      {id: 4, artistName: "Tallah", genre: "Nu-core", bandPhoto: "/images/bands/tallah.jpg", createdAt: new Date(), updatedAt: new Date() },
      {id: 5, artistName: "Enterprise Earth", genre: "Deathcore", bandPhoto: "/images/bands/enterprise-earth.jpg", createdAt: new Date(), updatedAt: new Date() },
      {id: 6, artistName: "Within Destruction", genre: "True slam", bandPhoto: "/images/bands/within-destruction.jpg", createdAt: new Date(), updatedAt: new Date() },
      {id: 7, artistName: "Acrania", genre: "Slamming deathcore", bandPhoto: "/images/bands/acrania.jpg", createdAt: new Date(), updatedAt: new Date() },
      {id: 8, artistName: "Shrine of Malice", genre: "Blackened deathcore", bandPhoto: "/images/bands/shrine-of-malice.jpg", createdAt: new Date(), updatedAt: new Date() },
      {id: 9, artistName: "Lorna Shore", genre: "Blackened deathcore", bandPhoto: "/images/bands/lorna-shore.jpg", createdAt: new Date(), updatedAt: new Date() },
      {id: 10, artistName: "Signs of the Swarm", genre: "Slamming deathcore", bandPhoto: "/images/bands/signs-of-the-swarm.jpg", createdAt: new Date(), updatedAt: new Date() },
      {id: 11, artistName: "Brand of Sacrifice", genre: "Slamming deathcore", bandPhoto: "/images/bands/brand-of-sacrifice.png", createdAt: new Date(), updatedAt: new Date() },
      {id: 12, artistName: "Varials", genre: "Beatdown", bandPhoto: "/images/bands/varials.jpg", createdAt: new Date(), updatedAt: new Date() },
      {id: 13, artistName: "Crystal Lake", genre: "Metalcore", bandPhoto: "/images/bands/crystal-lake.jpg", createdAt: new Date(), updatedAt: new Date() },
      {id: 14, artistName: "Spite", genre: "Deathcore", bandPhoto: "/images/bands/spite.jpeg", createdAt: new Date(), updatedAt: new Date() },
      {id: 15, artistName: "Angelmaker", genre: "Deathcore", bandPhoto: "/images/bands/angelmaker.jpg", createdAt: new Date(), updatedAt: new Date() },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Artists', null, {});

  }
};
