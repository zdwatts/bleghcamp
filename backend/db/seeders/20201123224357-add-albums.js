'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Albums', [
      {id: 1, albumTitle: "The Death of Me", artistId: 1, releaseYear: "2020", albumArt: "../../public/images/albums/the-death-of-me-polaris.jpg", createdAt: new Date(), updatedAt: new Date()},
      {id: 2, albumTitle: "The Mortal Coil", artistId: 1, releaseYear: "2017", albumArt: "../../public/images/albums/the-mortal-coil-polaris.jpg", createdAt: new Date(), updatedAt: new Date()},
      {id: 3, albumTitle: "Global Warning", artistId: 2, releaseYear: "2019", albumArt: "../../public/images/albums/global-warning-to-the-grave.jpg", createdAt: new Date(), updatedAt: new Date()},
      {id: 4, albumTitle: "The Way It Ends", artistId: 3, releaseYear: "2020", albumArt: "../../public/images/albums/the-way-it-ends-currents.jpg", createdAt: new Date(), updatedAt: new Date()},
      {id: 5, albumTitle: "The Place I Feel Safest", artistId: 3, releaseYear: "2018", albumArt: "../../public/images/albums/the-place-i-feel-safest-currents.jpg", createdAt: new Date(), updatedAt: new Date()},
      {id: 6, albumTitle: "Matriphagy", artistId: 4, releaseYear: "2020", albumArt: "../../public/images/albums/matriphagy-tallah.jpg", createdAt: new Date(), updatedAt: new Date()},
      {id: 7, albumTitle: "Luciferous", artistId: 5, releaseYear: "2019", albumArt: "../../public/images/albums/enterprise-earth-luciferous.jpg", createdAt: new Date(), updatedAt: new Date()},
      {id: 8, albumTitle: "Yokai", artistId: 6, releaseYear: "2020", albumArt: "../../public/images/albums/within-destruction-yokai.jpg", createdAt: new Date(), updatedAt: new Date()},
      {id: 9, albumTitle: "Deathwish", artistId: 6, releaseYear: "2018", albumArt: "../../public/images/albums/within-destruction-deathwish.jpg", createdAt: new Date(), updatedAt: new Date()},
      {id: 10, albumTitle: "Tyrannical Hierarchy", artistId: 7, releaseYear: "2018", albumArt: "../../public/images/albums/acrania-tyrannical-hierarchy.jpg", createdAt: new Date(), updatedAt: new Date()},
      {id: 11, albumTitle: "Totalitarian Dystopia", artistId: 7, releaseYear: "2014", albumArt: "../../public/images/albums/acrania-totalitarian-dystopia.jpg", createdAt: new Date(), updatedAt: new Date()},
      {id: 12, albumTitle: "Sheol", artistId: 8, releaseYear: "2019", albumArt: "../../public/images/albums/shrine-of-malice-sheol.jpg", createdAt: new Date(), updatedAt: new Date()},
      {id: 13, albumTitle: "Immortal", artistId: 9, releaseYear: "2020", albumArt: "../../public/images/albums/lorna-shore-immortal.jpg", createdAt: new Date(), updatedAt: new Date()},
      {id: 14, albumTitle: "Flesh Coffin", artistId: 9, releaseYear: "2017", albumArt: "../../public/images/albums/lorna-shore-flesh-coffin.jpg", createdAt: new Date(), updatedAt: new Date()},
      {id: 15, albumTitle: "Vital Deprivation", artistId: 10, releaseYear: "2019", albumArt: "../../public/images/albums/signs-of-the-swarm-vital-deprivation.jpg", createdAt: new Date(), updatedAt: new Date()},
      {id: 16, albumTitle: "The Disfigurement of Existence", artistId: 10, releaseYear: "2017", albumArt: "../../public/images/albums/signs-of-the-swarm-disfigurement.jpg", createdAt: new Date(), updatedAt: new Date()},
      {id: 17, albumTitle: "God Hand", artistId: 11, releaseYear: "2019", albumArt: "../../public/images/albums/brand-of-sacrifice-god-hand.jpg", createdAt: new Date(), updatedAt: new Date()},
      {id: 18, albumTitle: "In Darkness", artistId: 12, releaseYear: "2019", albumArt: "../../public/images/albums/varials-in-darkness.jpg", createdAt: new Date(), updatedAt: new Date()},
      {id: 19, albumTitle: "Pain Again", artistId: 12, releaseYear: "2017", albumArt: "../../public/images/albums/varials-pain-again.jpg", createdAt: new Date(), updatedAt: new Date()},
      {id: 20, albumTitle: "Helix", artistId: 13, releaseYear: "2019", albumArt: "../../public/images/albums/crystal-lake-helix.jpg", createdAt: new Date(), updatedAt: new Date()},
      {id: 21, albumTitle: "Nothing is Beautiful", artistId: 14, releaseYear: "2017", albumArt: "../../public/images/albums/spite-nothing-is-beautiful.jpg", createdAt: new Date(), updatedAt: new Date()},
      {id: 22, albumTitle: "Spite", artistId: 14, releaseYear: "2016", albumArt: "../../public/images/albums/spite.jpg", createdAt: new Date(), updatedAt: new Date()},
      {id: 23, albumTitle: "Angelmaker", artistId: 15, releaseYear: "2019", albumArt: "../../public/images/albums/angelmaker.jpg", createdAt: new Date(), updatedAt: new Date()},
      {id: 24, albumTitle: "Dissentient", artistId: 15, releaseYear: "2015", albumArt: "../../public/images/albums/angelmaker-dissentient.jpg", createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Albums', null, {});

  }
};
