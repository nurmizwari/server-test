"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Documents", "image_url", Sequelize.STRING);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      "Documents",
      "image_url",
      Sequelize.STRING
    );
  },
};
