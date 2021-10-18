import express from 'express'
import { createMovie, deleteMovie, getAllMovies, getMovie, updateMovie } from '../controllers/movie-controller.js'

const router = express.Router()

router.get("/movies/:id", getMovie)

router.get("/movies", getAllMovies)

router.post("/add", createMovie)

router.delete("/delete/:id", deleteMovie)

router.put("/update/:id", updateMovie)

export default router