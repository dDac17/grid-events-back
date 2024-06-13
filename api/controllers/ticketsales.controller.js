const Ticket = require('../models/ticketsales.model')

const getAllTickets = async (req, res) => {
    try {
      const ticket = await Ticket.findAll({
        where: req.query
      })
  
      if (!ticket) {
        res.status(404).json({
          message: 'No ticket found',
          result: ticket
        })
      }
  
      res.status(200).json({
        message: "All tickets fetched",
        result: ticket,
      })
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error getting all tickets",
        result: error,
      });
    }
  }


  const getOneTicket = async (req, res) => {
    try {
      const ticket = await Ticket.findByPk(req.params.id)
  
      if (!ticket) {
        res.status(404).json({
          message: "Ticket not found",
          result: ticket,
        });
      }
  
      res.status(200).json({
        message: "Ticket fetched",
        result: ticket,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error getting one ticket",
        result: error,
      });
    }
  };


  const createTicket = async (req, res) => {
    try {
      const newEvent = {
        ...req.body,
       // user_id: req.locals.user.id
      }
      const ticket = await Ticket.create(newEvent)
  
      res.status(200).json({
        message: "Ticket created",
        result: ticket,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error creating ticket",
        result: error,
      });
    }
  }


  module.exports = {
    getAllTickets,
    createTicket,
    getOneTicket
  }