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
// pendiente test de añadir fav y like

router.post('/', createEvent)
router.get('/', getAllEvents)
router.get('/:id', checkAuth, getOneEvent)
router.post('/:id/favorite', addFavouriteEvent)
router.put('/:id/like', addLike)
router.delete('/:id', deleteEvent)
router.put('/:id', updateEvent)

module.exports = router