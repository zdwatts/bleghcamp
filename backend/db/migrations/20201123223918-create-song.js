'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      songTitle: {
        allowNull: false,
        type: Sequelize.STRING
      },
      length: {
        allowNull: false,
        type: Sequelize.DECIMAL(2, 2)
      },
      albumId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Albums"}
      },
      artistId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Artists"}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Songs');
  }
};
