const User = require('../api/models/user.model')
const Event = require('../api/models/event.model')
const Category = require('../api/models/category.model')
const Comment = require('../api/models/comments.model')

const defineRelations = () => {
  // ONE TO MANY
  User.hasMany(Event)
  Event.belongsTo(User) 

  
  Category.hasMany(Event)
  Event.belongsTo(Category)
  
  User.hasMany(Comment)
  Comment.belongsTo(User)

  Event.hasMany(Comment)
  Comment.belongsTo(Event)
  
  //Event.hasMany(Ticket)
  //Ticket.belongsTo(Event)

  //MANY TO MANY
  User.belongsToMany(Event, {
    through: "favorites",    // Se generará la tabla intermedia con el nombre 'favorites'
    timestamps: false,
  })
  Event.belongsToMany(User, {
    through: "favorites",
    timestamps: false,
  })
}

module.exports = defineRelations