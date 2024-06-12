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

//revisar checkAuth cuándo esten todas las rutas hechas!!!

router.post('/', createEvent)
router.get('/', getAllEvents)
router.get('/:id', checkAuth, getOneEvent)
router.post('/:id/favorite', checkAuth, addFavouriteEvent)
router.put('/:id/like', addLike)
router.delete('/:id',checkAuth, deleteEvent)
router.put('/:id', checkAuth, updateEvent)

module.exports = router