require("dotenv").config() // Requerimos dotenv en el archivo principal para poder emplear variables de entorno en todo el proyecto (process.env)
const express = require('express')
const morgan = require('morgan')

const { 
  checkDB, 
  syncModels 
} = require("./database")
const defineRelations = require('./database/relations')

const startDB = async () => {
  await checkDB()     
  await defineRelations()
  syncModels()
}

const app = express()

app.listen(process.env.DB_PORT, () => {
  console.log(`Server started! Listening on port ${process.env.DB_PORT}`)
  startDB() // Iniciamos la conexión al servidor una vez nuestro servidor esté arrancado y esperando peticiones
})