'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieList extends Model {
    static associate(models) {
      MovieList.hasMany(models.MovieListItem, {
        foreignKey: 'movieListId',
        as: 'list',
      });
    }
  };
  MovieList.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MovieList',
  });
  return MovieList;
};