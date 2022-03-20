const { Comment, User } = require('../models');

module.exports = {
  // Get all courses
  getCourses(req, res) {
    Comment.find()
      .then((courses) => res.json(courses))
      .catch((err) => res.status(500).json(err));
  },
  // Get a comment
  getSingleCourse(req, res) {
    Comment.findOne({ _id: req.params.courseId })
      .select('-__v')
      .then((comment) =>
        !comment
          ? res.status(404).json({ message: 'No comment with that ID' })
          : res.json(comment)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a comment
  createCourse(req, res) {
    Comment.create(req.body)
      .then((comment) => res.json(comment))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a comment
  deleteCourse(req, res) {
    Comment.findOneAndDelete({ _id: req.params.courseId })
      .then((comment) =>
        !comment
          ? res.status(404).json({ message: 'No comment with that ID' })
          : User.deleteMany({ _id: { $in: comment.students } })
      )
      .then(() => res.json({ message: 'Comment and students deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a comment
  updateCourse(req, res) {
    Comment.findOneAndUpdate(
      { _id: req.params.courseId },
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
};
