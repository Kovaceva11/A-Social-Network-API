const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

// Schema to create a course model
const likeSchema = new Schema(
  {
    likeId: {
      type: Schema.Types.ObjectId,
      Default: () => new Types.ObjectId()
    },
    likeBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      // Sets a default value of 12 weeks from now
      default: Date.now,
      get: (createdAt) => moment(createdAt).format('MMM Do YYYY')
    },
    
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const commentSchema = new Schema(
  {
    commentText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (cratedAt) => moment(createdAt).format('MMM Do YYYY')      
    },
    username: {
      type: String,
      required: true,
    },
    likes: [likeSchema],
    },
    {
      toJSON: {
        virtuals: true,
        getters: true,
      },
    }
  );

  commentSchema.virtual('likeCount').get(function() {
    return this.likes.length;
  });

const Comment = model('comment', likeSchema);

module.exports = Comment;
