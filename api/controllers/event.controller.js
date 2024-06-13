const Event = require('../models/event.model')

const getAllEvents = async (req, res) => {
    try {
      const events = await Event.findAll({
        where: req.query 
      })
  
      if (!events) {
        res.status(404).json({
          message: 'Event not found',
          result: events
        })
      }
  
      res.status(200).json({
        message: "All events fetched",
        result: events,
      })
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error getting all events",
        result: error,
      });
    }
  }

  const getOneEvent = async (req, res) => {
    try {
      const event = await Event.findByPk(req.params.id)
  
      if (!event) {
        res.status(404).json({
          message: "Event not found",
          result: event,
        });
      }
  
      res.status(200).json({
        message: "Event fetched",
        result: event,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error getting one event",
        result: error,
      });
    }
  };

const createEvent = async (req, res) => {
  try {
    const newEvent = {
      ...req.body,
     // user_id: req.locals.user.id
    }
    const event = await Event.create(newEvent)

    res.status(200).json({
      message: "Event created",
      result: event,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error creating event",
      result: error,
    });
  }
}

const updateEvent = async (req, res) => {
    try {
      const [result] = await Event.update(
        req.body,
        {
          where: {
            id: req.params.id
          }
        }
      );
  
      if (result === 0) {
        res.status(404).json({
          message: "Event not found",
          result: result,
        });
      }
  
      res.status(200).json({
        message: "Event updated",
        result: req.body,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error updating event",
        result: error,
      });
    }
  };

const deleteEvent = async (req, res) => {
    try {
      const event = await Event.destroy(
      {
        where: {
          id: req.params.id,
        },
      });
  
      if (!event) {
        res.status(404).json({
          message: "Event not found",
          result: event,
        });
      }
  
      res.status(200).json({
        message: "Event deleted",
        result: event,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error getting event",
        result: error,
      });
    }
  };

const addFavouriteEvent = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id)

    if (!event) {
      res.status(404).json()
    }

    // Al definir una relación Many to Many entre event y User, Sequelize nos ha generado automáticamente el método addUser, donde podemos añadir al usuario que tenemos guardado en res.locals, que es el usuario logueado
    await event.addUser(res.locals.user)

    return res.status(200).json({
      message: 'Event added',
      result: event
    })
  } catch (error) {
    console.error(error)
  }
}

const addLike = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id)

    if (!event) {
      res.status(404).json({
        message: 'Event not found',
        result: 0
      })
    }

    event.likes++ // Aumentamos en 1 el contador de likes

    await event.save() // Guardamos los cambios realizados al chiste en la base de datos

    res.status(200).json({
      message: 'Like added',
      result: event.likes
    })
  } catch (error) {
    
  }
}

module.exports = {
  createEvent,
  addFavouriteEvent,
  addLike,
  deleteEvent,
  updateEvent,
  getAllEvents,
  getOneEvent
}