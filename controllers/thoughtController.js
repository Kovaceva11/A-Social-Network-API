const { Thought, User } = require('../models');

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get a thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a thought
  createThought({params, body}, res) {
    Thought.create(body)
        .then((_id) => {
            return User.findOneAndUpdate({ _id: params.userId }, { $push: { thoughts: _id } }, { new: true });
        })
        .then((thought) => res.json(thought))
        .catch((err) => res.json(err))
},
  // Delete a thought
 
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.status(200).json({message: "Thought successfully Deleted"})
      )        
      .catch((err) => res.status(500).json(err));
  },


  // Update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

// addReaction
addReaction(req, res) {
  console.log('You are adding a reaction!');
  console.log(req.body);
  Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $push: { reactions: req.body } },
      { runValidators: true, new: true }
  )
      .then((thought) =>
      !thought
          ? res.status(404).json({ message: 'No thought found with that ID!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
},
// deleteReaction
deleteReaction(req, res) {
  console.log(req.params.reactionId)
  Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { _id: req.params.reactionId } } },
      { runValidators: true, new: true }
  )
      .then((thought) =>
      !thought
          ? res.status(404).json({ message: 'No thought found with that ID!' })
          : res.status(200).json({message: "Reaction Successfully Deleted"})
      )
      .catch((err) => res.status(500).json(err));
},


};
