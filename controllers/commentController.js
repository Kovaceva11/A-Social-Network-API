const { Comment, User } = require('../models');

module.exports = {
  // Get all comments
  getComments(req, res) {
    Comment.find()
      .then((comments) => res.json(comments))
      .catch((err) => res.status(500).json(err));
  },
  // Get a comment
  getSingleComment(req, res) {
    Comment.findOne({ _id: req.params.commentId })
      .select('-__v')
      .then((comment) =>
        !comment
          ? res.status(404).json({ message: 'No comment with that ID' })
          : res.json(comment)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a comment
  createComment(req, res) {
    Comment.create(req.body)
      .then((comment) => 
      {return User.findOneAndUpdate (
        {_id: req.body.userId},
        {$addToSet: {comments: comment._id }},
        {new: true}
        );
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a comment
 
  deleteComment(req, res) {
    Comment.findOneAndDelete({ _id: req.params.commentId })
      .then((comment) =>
        !comment
          ? res.status(404).json({ message: 'No comment with that ID' })
          : res.status(200).json({message: "Comment successfully Deleted"})
      )        
      .catch((err) => res.status(500).json(err));
  },


  // Update a comment
  updateComment(req, res) {
    Comment.findOneAndUpdate(
      { _id: req.params.commentId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((comment) =>
        !comment
          ? res.status(404).json({ message: 'No comment with this id!' })
          : res.json(comment)
      )
      .catch((err) => res.status(500).json(err));
  },

// addReaction
addReaction(req, res) {
  console.log('You are adding a reaction!');
  console.log(req.body);
  Comment.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $push: { reactions: req.body } },
      { runValidators: true, new: true }
  )
      .then((comment) =>
      !comment
          ? res.status(404).json({ message: 'No comment found with that ID!' })
          : res.json(comment)
      )
      .catch((err) => res.status(500).json(err));
},
// deleteReaction
deleteReaction(req, res) {
  console.log(req.params.reactionId)
  Comment.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { _id: req.params.reactionId } } },
      { runValidators: true, new: true }
  )
      .then((comment) =>
      !comment
          ? res.status(404).json({ message: 'No comment found with that ID!' })
          : res.json(comment)
      )
      .catch((err) => res.status(500).json(err));
},


};
