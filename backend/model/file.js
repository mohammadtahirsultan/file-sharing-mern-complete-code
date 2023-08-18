import mongoose from "mongoose";


const fileSchema = new mongoose.Schema({

    name: String,
    path: String,
    downloaded: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


const File = mongoose.model("File", fileSchema)


export default (File)