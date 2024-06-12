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

const router = require("./api/routes")

const app = express()
app.use(express.json()) // Le damos la capacidad a nuestra api de traducir los JSON que reciba en las peticiones a un objeto de javascript
app.use(morgan('dev'))

app.use('/api', router)

app.listen(process.env.PORT, () => {
  console.log(`Server started! Listening on port ${process.env.PORT}`)
  startDB() // Iniciamos la conexión al servidor una vez nuestro servidor esté arrancado y esperando peticiones
})