const Comment = require('../models/comments.model')

const getAllComments = async (req, res) => {
    try {
      const comments = await Comment.findAll({
        where: req.query
      })
  
      if (!comments) {
        res.status(404).json({
          message: 'Comments not found',
          result: comments
        })
      }
  
      res.status(200).json({
        message: "All comments fetched",
        result: comments,
      })
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error getting all comments",
        result: error,
      });
    }
  }

 const createComment = async (req, res) => {
    try {
      const comment = await Comment.create(req.body)
  
      res.status(200).json({
        message: "Comment created",
        result: comment,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error creating comment",
        result: error,
      });
    }
  }
   
  const deleteComment = async (req, res) => {
    try {
      const comment = await Comment.destroy(
      {
        where: {
          id: req.params.id,
        },
      });
  
      if (!comment) {
        res.status(404).json({
          message: "Comment not found",
          result: comment,
        });
      }
  
      res.status(200).json({
        message: "Comment deleted",
        result: comment,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error getting comment",
        result: error,
      });
    }
  };


  module.exports = {
    getAllComments,
    createComment,
    deleteComment
  }