import { uploadFile,downloadFile } from "../controller/file.js"
import express from 'express'
import upload from "../multer/multer.js";


const router = express.Router()


router.post("/upload", upload.single("file"), uploadFile)
router.get("/download/:id", downloadFile)


export default router;