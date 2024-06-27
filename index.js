require("dotenv").config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

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
app.use(express.json()) // Traduce los JSON que reciba en las peticiones a un objeto de javascript
app.use(morgan('dev'))
app.use(cors())

app.use('/api', router)

app.listen(process.env.PORT, () => {
  console.log(`Server started! Listening on port ${process.env.PORT}`)
  startDB() // Iniciamos la conexión al servidor una vez nuestro servidor esté arrancado y esperando peticiones
})
