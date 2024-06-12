const User = require('../api/models/user.model')
const Event = require('../api/models/event.model')
// const Category = require('../api/models/category.model')

const defineRelations = () => {
  // ONE TO MANY
  User.hasMany(Event)
  Event.belongsTo(User) 

  //Event.hasMany(Ticket)
  //Ticket.belongsTo(Event)

  
  // Category.hasMany(Event)
  // Event.belongsTo(Category) // Esto generará una columna en joke, llamada 'category_id' con una foreign key a la tabla 'category'

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