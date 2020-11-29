const express = require('express');
const router = new express.Router();
const movieCtrl = require('../controllers/movies');

router.get('/list', movieCtrl.getList);
router.post('/create', movieCtrl.addListItem);
router.post('/share', movieCtrl.shareLink);
router.delete('/delete_item/:item_id', movieCtrl.deleteListItem);

module.exports = router;