const router = require("express").Router()

const { 
    getAllTickets,
    createTicket,
    getOneTicket
   } = require("../controllers/ticketsales.controller")
  
  const {
    checkAuth
  } = require('../middelwares')

router.post('/', createTicket)
router.get('/', getAllTickets)
router.get('/:id', getOneTicket)

module.exports = router