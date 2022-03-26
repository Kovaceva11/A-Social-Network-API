const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// /api/Thoughts
router.route('/').get(getThoughts);

// /api/Users/:UserId
router.route('/:userId')
  .post(createThought);

// /api/Thoughts/:ThoughtId
router.route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/Thoughts/:ThoughtId/Likes
router
  .route('/:thoughtId/likes')
  .post(addReaction);

// /api/Thoughts/:ThoughtId/Likes/:LikeId
router.route('/:thoughtId/like/:likeId')
  .delete(deleteReaction);

module.exports = router;
