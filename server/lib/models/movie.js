import mongoose from 'mongoose'
const { Schema } = mongoose

const movieSchema = new Schema({
    title: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 10 },
    comment: { type: String, required: true },
    image: { type: String, required: false },
})


export default mongoose.model("Movie", movieSchema)