const { Sequelize } = require('sequelize')

// Método de conexión a la base de datos pasándole cada información por separado (Opción 3 en https://sequelize.org/docs/v6/getting-started/#connecting-to-a-database)

// const connection = new Sequelize(
  //   process.env.DB_NAME,
  //   process.env.DB_USER,
  //   process.env.DB_PASS,
  //   {
    //     host: process.env.DB_HOST,
//     dialect: process.env.DB_DIALECT,
//     logging: false
//   }
// )

// Método de conexión a la base datos pasándole la url de conexión completa (Opción 1 en https://sequelize.org/docs/v6/getting-started/#connecting-to-a-database)
const connection = new Sequelize(process.env.DB_URL, {
  logging: false
})
// 'connection' será nuestra instancia de la conexión a nuestra base de datos


// Función de comprobación de la conexión a la base de datos
const checkDB = async () => {
  try {
    await connection.authenticate()
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:')
    console.error(error)
  }
}

// Función para sincronizar los modelos definidos en nuestro código con nuestra base de datos
const syncModels = async () => {
  try {
    await connection.sync() //dentro de sync podemos añadir {alter: true} si queremos modificar la estructura de una tabla ya existente, o {force: true} si queremos borrar el contenido de la base de datos y crearlo desde cero.
    console.log('Models syncrhonized!')
  } catch (error) {
    console.error("Unable to sync models:")
    console.error(error)
  }
}

module.exports = {
  connection,
  checkDB,
  syncModels
}