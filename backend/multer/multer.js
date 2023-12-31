import multer from "multer";

import os from 'os'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, os.tmpdir())
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})



const upload = multer({ storage: storage })

export default upload;
