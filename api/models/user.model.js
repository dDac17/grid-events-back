const { DataTypes } = require("sequelize")
const { connection } = require('../../database') // Instancia de la conexión generado en el archivo index.js de la carpeta database

const Users = connection.define(
  "users", // Nombre de la tabla en la base de datos
  {
    // Columnas de la tabla
    firstname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true // Hacemos que sea un campo con valor único
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      imgProfile: {
        type: DataTypes.STRING,
        allowNull: true, 
      },
    role: {
      type: DataTypes.ENUM('user', 'admin'), // Definimos 'user' y 'admin' como los únicos valores válidos para la columna 'role'
      defaultValue: 'user' // Hacemos que su valor por defecto sea 'user'
    }
  },
  {
    timestamps: false // Indicamos que no queremos generar las columnas de 'fecha de creación' ni de 'fecha de última actualización'
  }
)

module.exports = Users
