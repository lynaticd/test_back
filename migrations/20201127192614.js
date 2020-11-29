'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction(async t => {
    await queryInterface.addColumn(
      'MovieListItems',
      'title', {
      type: Sequelize.STRING,
      defaultValue: false,
    },
      { transaction: t },
    );
    await queryInterface.addColumn(
      'MovieListItems',
      'posterPath', {
      type: Sequelize.STRING,
      defaultValue: false,
    },
      { transaction: t },
    );
    await queryInterface.addColumn(
      'MovieListItems',
      'year', {
      type: Sequelize.STRING,
      defaultValue: false,
    },
      { transaction: t },
    );
    await queryInterface.addColumn(
      'MovieListItems',
      'overview', {
      type: Sequelize.STRING,
      defaultValue: false,
    },
      { transaction: t },
    );
    await queryInterface.addColumn(
      'MovieListItems',
      'rating', {
      type: Sequelize.STRING,
      defaultValue: false,
    },
      { transaction: t },
    );
  }),
  down: (queryInterface, Sequelize) => queryInterface.sequelize.transaction(async t => {
    await queryInterface.removeColumn(
      'MovieListItems',
      'title',
      { transaction: t },
    );
    await queryInterface.removeColumn(
      'MovieListItems',
      'posterPath',
      { transaction: t },
    );
    await queryInterface.removeColumn(
      'MovieListItems',
      'year',
      { transaction: t },
    );
    await queryInterface.removeColumn(
      'MovieListItems',
      'overview',
      { transaction: t },
    );
    await queryInterface.removeColumn(
      'MovieListItems',
      'rating',
      { transaction: t },
    );
  }),
};
