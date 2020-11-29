const { MovieList, MovieListItem } = require('../models');
const makeError = require('../controllers/http-error');
const HttpStatus = require('http-status-codes');
const unprocessableEntity = makeError.bind(HttpStatus.UNPROCESSABLE_ENTITY);

module.exports = {
  async getList() {
    try {
      const list = MovieList.findOne({
        where: {
          name: "favourite"
        },
        include: {
          model: MovieListItem,
          as: 'list'
        }
      });

      return list;
    } catch (error) {
      throw unprocessableEntity({ error });
    }
  },

  async addListItem(itemInfo) {
    let list;
    list = await this.getList();

    if (!list) {
      const newList = {
        name: "favourite"
      }

      list = await MovieList.create(newList);
    }

    const releaseDate = itemInfo.release_date;
    const year = new Date(releaseDate).getFullYear();

    const newItem = {
      posterPath: itemInfo.poster_path,
      title: itemInfo.title,
      year: Number(year),
      overview: itemInfo.overview,
      rating: itemInfo.vote_average,
      movieListId: list.id,
    };
    const newItemInList = await MovieListItem.create(newItem);

    return newItemInList;
  },

  async deleteListItem(id) {
    let item;
    try {
      item = await MovieListItem.destroy({ where: { id } });
    } catch (e) {
      throw unprocessableEntity({ error: 'Произошла ошибка. Попробуйте еще раз.', e });
    }
  },
};