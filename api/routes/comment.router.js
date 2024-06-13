const router = require("express").Router()

const { 
    getAllComments,
    createComment,
    deleteComment
   } = require("../controllers/comments.controller")
  
  const {
    checkAuth
  } = require('../middelwares')
  
  
  router.post('/',checkAuth, createComment)
  router.get('/', getAllComments)
  router.delete('/:id', checkAuth, deleteComment)
  // router.put('/:id/like', addLike)
  
  module.exports = router