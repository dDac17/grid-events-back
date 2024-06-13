const router = require("express").Router()

const { 
    getAllTickets,
    createTicket,
    getOneTicket
   } = require("../controllers/ticketsales.controller")
  
  const {
    checkAuth
  } = require('../middelwares')

router.post('/:event_id',  checkAuth, createTicket) // le pasamos el ID del evento
router.get('/', checkAuth, getAllTickets)
router.get('/:id', checkAuth, getOneTicket)

module.exports = router