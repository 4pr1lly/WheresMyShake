const express = require ('express');
const router = express.Router(); // creates a router object
const ctrl = require('../controllers');

router.get('/:userId', ctrl.reviews.index);
router.get('/new/:userId', ctrl.reviews.renderNew);
router.get('/show/:index', ctrl.reviews.show)
router.post('/:userId', ctrl.reviews.postReviews);
router.delete('/:index', ctrl.reviews.indexDelete);
router.get ('/:index/edit', ctrl.reviews.renderEdit);
router.put('/:index',ctrl.reviews.editReviews);




module.exports = router;