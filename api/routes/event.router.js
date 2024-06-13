const router = require("express").Router()

const { 
  createEvent,
  addFavouriteEvent,
  addLike,
  deleteEvent,
  updateEvent,
  getAllEvents,
  getOneEvent
 } = require("../controllers/event.controller")

const {
  checkAuth
} = require('../middelwares')

router.post('/', checkAuth, createEvent)
router.get('/', getAllEvents)
router.get('/:id', getOneEvent)
router.post('/:id/favorite',checkAuth, addFavouriteEvent)
router.put('/:id/like',checkAuth, addLike)
router.delete('/:id',checkAuth, deleteEvent)
router.put('/:id',checkAuth, updateEvent)

module.exports = router