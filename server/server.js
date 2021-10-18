import express, { response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import { dbConnection } from './lib/db/db_connection.js'
import movieRouter from './lib/routes/movie-routes.js'

const app = express()

//loads environment variables from a .env file
dotenv.config()

//enable all CORS requests 
app.use(cors())

//for body parsing
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//database connection
dbConnection()

//movie routes
app.use("/movie", movieRouter)

//setting the application port
app.listen(process.env.PORT, () => console.log(`app is running on port ${process.env.PORT}`))
