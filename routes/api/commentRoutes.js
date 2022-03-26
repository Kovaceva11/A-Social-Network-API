const router = require('express').Router();

const {
  getComments,
  getSingleComment,
  createComment,
  updateComment,
  deleteComment,
  addReaction,
  deleteReaction,
} = require('../../controllers/CommentController');

// /api/Comments
router.route('/').get(getComments);

// /api/Users/:UserId
router.route('/:userId')
  .post(createComment);

// /api/Comments/:CommentId
router.route('/:commentId')
  .get(getSingleComment)
  .put(updateComment)
  .delete(deleteComment);

// /api/Comments/:CommentId/Likes
router
  .route('/:commentId/likes')
  .post(addReaction);

// /api/Comments/:CommentId/Likes/:LikeId
router.route('/:commentId/like/:likeId')
  .delete(deleteReaction);

module.exports = router;
