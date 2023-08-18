import express from 'express'
import dotenv from 'dotenv'
import connectDB from './database/db.js';
import router from './routes/file.js';
import cors from 'cors'
const app = express()

dotenv.config({ path: "./config.env" })
const port = 4000;

connectDB()


app.use(cors({
    origin: "http://localhost:5173"
}))

app.use(router)

app.get("/", (req, res) => {
    res.send("Hello World")
})


app.listen(port, (req, res) => {
    console.log("App is Running");
})