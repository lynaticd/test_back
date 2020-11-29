'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MovieListItem extends Model {};
  MovieListItem.init({
    movieListId: DataTypes.INTEGER,
    movieReffererId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    posterPath: DataTypes.STRING,
    year: DataTypes.STRING,
    overview: DataTypes.STRING,
    rating: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'MovieListItem',
  });
  return MovieListItem;
};