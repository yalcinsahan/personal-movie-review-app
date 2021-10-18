import Movie from '../models/movie.js'

export const createMovie = (req, res) => {
    Movie.create({
        title: req.body.title,
        rating: req.body.rating,
        comment: req.body.comment,
        image: req.body.image,
    })
        .then(response => res.send(response))
        .catch(err => res.send(err))
}

export const getMovie = (req, res) => {
    Movie.findById(req.params.id)
        .then(response => res.send(response))
        .catch(err => res.send(err))
}

export const getAllMovies = (req, res) => {
    Movie.find({})
        .then(response => res.send(response))
        .catch(err => res.send(err))
}

export const deleteMovie = (req, res) => {
    Movie.findByIdAndDelete(req.params.id)
        .then(response => res.send({ message: "movie was deleted successfully" }))
        .catch(err => res.send(err))
}

export const updateMovie = (req, res) => {
    Movie.findByIdAndUpdate(req.params.id, req.body)
        .then(() => getMovie(req, res))
        .catch(err => res.send(err))
}

