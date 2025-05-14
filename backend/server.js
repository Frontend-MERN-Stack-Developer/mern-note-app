import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import route from './routes/userRoutes.js'

const app = express()
app.use(bodyParser.json())
app.use(cors())

dotenv.config()

const PORT = process.env.PORT || 2500
const MONGURI = process.env.MONGURI

mongoose.connect(MONGURI)
.then(() => {
    console.log('db is connected successfully.');
    app.listen(PORT, () => {
        console.log(`app server is running on port: ${PORT}`);
    })
})
.catch((error) => {
    console.log('server error', error)
})

app.use("/api", route)
