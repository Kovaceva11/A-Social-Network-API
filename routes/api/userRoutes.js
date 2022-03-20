const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  getFriend,
  addFriend,
  deleteFriend,
} = require('../../controllers/UserController.js');

// /api/Users
router.route('/').get(getUsers).post(createUser);

// /api/Users/:UserId
router
  .route('/:UserId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

//  /api/friends/:friendId
router
  .route('/.userId/friends/:friendId')
  .get(getFriend)
  .post(addFriend)
  .delete(deleteFriend);


module.exports = router;
