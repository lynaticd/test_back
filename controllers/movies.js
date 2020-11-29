const movieService = require('../services/movieService');
const HttpStatus = require('http-status-codes');

module.exports = {
  async getList(req, res) {
    const { query: { status } } = req;
    const productList = await movieService.getList(status);

    res.status(HttpStatus.OK).send(productList);
  },
  async shareLink() {
    const uniqueLink = 'http://localhost:8080/list'
    res.status(HttpStatus.OK).send(uniqueLink);
  },
  async addListItem(req, res) {
    const { body } = req;
    application = await movieService.addListItem(body);
    res.status(HttpStatus.CREATED).send(application);
  },
  async deleteListItem(req, res) {
    const { item_id } = req.params;
    const updatedStatus = await movieService.deleteListItem(item_id);
    res.sendStatus(HttpStatus.OK);
  },
};