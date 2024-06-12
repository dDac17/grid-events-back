const User = require('../api/models/user.model')
const ContactInfo = require('../api/models/contact.model')
const Joke = require('../api/models/joke.model')
const Category = require('../api/models/category.model')

const defineRelations = () => {
  //ONE TO ONE
  User.hasOne(ContactInfo)
  ContactInfo.belongsTo(User) // Esto generará una columna en contact_info, llamada 'user_id' con una foreign key a la tabla 'user'

  // ONE TO MANY
  User.hasMany(Joke)
  Joke.belongsTo(User) // Esto generará una columna en joke, llamada 'user_id' con una foreign key a la tabla 'user'

  Category.hasMany(Joke)
  Joke.belongsTo(Category) // Esto generará una columna en joke, llamada 'category_id' con una foreign key a la tabla 'category'

  //MANY TO MANY
  User.belongsToMany(Joke, {
    through: "favorites",    // Se generará la tabla intermedia con el nombre 'favorites'
    timestamps: false,
  })
  Joke.belongsToMany(User, {
    through: "favorites",
    timestamps: false,
  })
}

module.exports = defineRelations