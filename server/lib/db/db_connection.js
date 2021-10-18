import mongoose from 'mongoose'

export const dbConnection = () => {
    mongoose.connect(process.env.DB_PATH)
        .then(() => console.log("database connecction successful"))
        .catch((err) => -console.log(err));
}